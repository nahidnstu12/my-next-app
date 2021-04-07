import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

export default async function getAllPersons(req,res){
    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });

    if(req.method === 'POST'){
       await db.run('insert into person (name , email) values (?,?)',[req.body.name,req.body.email])
      // const res = stmt.run(req.body.name,req.body.email)
      // res.finalize()
  }

    const people = await db.all("SELECT * FROM person");
    res.json(JSON.stringify(people))

  
}

/**
let res = await fetch('http://localhost:3000/api/persons',{
method:'POST',
headers:{
    'Content-Type':'application/json'
},
body:JSON.stringify({name:'Sabrina',email:'nitu@gm.com'})
})

 */