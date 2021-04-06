import sqlite3 from 'sqlite3';
import { open } from 'sqlite'

async function setup(){
    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
      });
    await db.migrate({force:'last'});

    const people = await db.all("SELECT * FROM person");
    // console.log("All Vehicles: "+json.stringify( people))
    console.log("All Persons: "+JSON.stringify( people))
}

setup();
