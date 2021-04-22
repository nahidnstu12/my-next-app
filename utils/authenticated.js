import { verify } from "jsonwebtoken"
import { secret } from "./secret"


export const authenticated = fn => async(req,res)=>{
    verify(req.cookies.auth, secret, async function(err,decoded){
        if(!err && decoded){
            return await fn(req,res)
        }
        res.status(401).json({message: "Sorry, You are not authenticated",error: err})
    })
}