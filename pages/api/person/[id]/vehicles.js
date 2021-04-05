export default function getAllVehilesByPersonId(req,res){
    if(req.method !== 'GET'){
        res.status(500).json({message:"Sorry, we only expect GET method"})

    }
    res.json({byId:req.query.id,method:req.method, message:"get all vehicles by person id"})
}