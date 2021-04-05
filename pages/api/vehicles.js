export default function getAllVehiles(req,res){
    if(req.method !== 'GET'){
        res.status(500).json({message:"Sorry, we only expect GET method"})

    }
    res.json({hello:"world",method:req.method})
}