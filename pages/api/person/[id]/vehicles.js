import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function getAllVehilesByPersonId(req,res){
    if(req.method !== 'GET'){
        res.status(500).json({message:"Sorry, we only expect GET method"})
    }

    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
      });
    await db.migrate({force:'last'});

    // const vehicleList = await db.all("SELECT * FROM vehicle where ownerId = ?",[req.query.id]);

    // const vehicleList = await db.all("SELECT p.name, p.email, v.vname as vehicle_name, v.model from vehicle as v inner join person as p on v.ownerId = p.id");

    const people = await db.all("SELECT name FROM person where id = ?",[req.query.id]);
    const vehicleList = await db.all("SELECT * FROM vehicle where ownerId = ?",[req.query.id]);
    const list = [...people,...vehicleList]

    res.json(list)
}