import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import {hash} from 'bcrypt';

export default async function signup(req,res){

    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });

    if(req.method === 'POST'){
        hash(req.body.password, 10, async function(err, hash) {

        const stmt = await db.run('insert into person (name,email,password) values (?,?,?)',[req.body.name,req.body.email,hash]);

        const people = await db.all("SELECT * FROM person");
        res.json(people)

        })
    }
    else{
        res.json({message:"we can only support post method"})
    }

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
