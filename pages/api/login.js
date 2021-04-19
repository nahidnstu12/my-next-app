import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import {compare} from 'bcrypt';

export default async function login(req,res){

    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });

    if(req.method === 'POST'){
        const person = await db.get("select * from person where email = ?",[req.body.email])

        compare(req.body.password, person.password, function(err, result) {

        if(!err && result){
            res.json("Login Success")
        }
        else{
            res.json("Login failed")
        }

        })
    }
    else{
        res.json({message:"we can only support post method"})
    }

}

