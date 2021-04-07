import sqlite3 from 'sqlite3';
import { open } from 'sqlite'

export default async function getPersonById(req,res){
    // if(req.method !== 'GET'){
    //     res.status(500).json({message:"Sorry, we only expect GET method"})
    // }

    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });

    if(req.method === 'PUT'){
        const stmt = await db.prepare('update person set name = ?, email = ? where id = ?')
        const res = stmt.run(req.body.name,req.body.email,req.query.id)
        res.finalize()
    }

    const people = await db.all("SELECT * FROM person where id = ?",[req.query.id]);

    res.json(people)
}
/**
 const res = await fetch('http://localhost:3000/api/person/3',{
method:'PUT',
headers:{
    'Content-Type':'application/json'
},
body:JSON.stringify({name:'Forhad Sir',email:'sir@gm.com'})
})

 */
