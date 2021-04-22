import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { authenticated } from '../../utils/authenticated';

export default authenticated( async function getAllVehiles(req,res){
    // if(req.method !== 'GET'){
    //     res.status(500).json({message:"Sorry, we only expect GET method"})
    // }
    
    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });

    const vehicles = await db.all("SELECT * FROM vehicle");

    res.json(JSON.stringify(vehicles))
})

