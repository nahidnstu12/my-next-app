export default function getAllPersons(req,res){
    if(req.method !== 'GET'){
        res.status(500).json({message:"Sorry, we only expect GET method"})

    }
    res.json([{name:"Nahid"},{name:"Asik"},{name:"sony"}])
}