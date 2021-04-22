import sqlite3 from 'sqlite3';
import {open} from 'sqlite';
import { authenticated } from '../../utils/authenticated';


export default authenticated( async function getAllPersons(req,res){
    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });

    if(req.method === 'POST'){
       await db.run('insert into person (name , email) values (?,?)',[req.body.name,req.body.email])
      
    }

    const people = await db.all("SELECT id,name,email FROM person");
    // res.json(JSON.stringify(people))
    res.json(people)

  
})

/**
let res = await fetch('http://localhost:3000/api/persons',{
method:'POST',
headers:{
    'Content-Type':'application/json'
},
body:JSON.stringify({name:'Sabrina',email:'nitu@gm.com'})
})

 */