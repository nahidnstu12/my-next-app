-- UP

CREATE TABLE Person(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE Vehicle(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vname TEXT,
    model TEXT,
    ownerId INTEGER
);


-- person
-- INSERT INTO Person (name,email) values ('Nahid','nahid@gm.cm');
-- INSERT INTO Person (name,email) values ('Asik','asik@gm.cm');
-- INSERT INTO Person (name,email) values ('sony','sony@gm.cm');


-- vehicle
-- INSERT INTO Vehicle (vname,model,ownerId) values ('bench','abc',1);
-- INSERT INTO Vehicle (vname,model,ownerId) values ('tesla','eln',2);
-- INSERT INTO Vehicle (vname,model,ownerId) values ('corrola','bx2',1);
-- INSERT INTO Vehicle (vname,model,ownerId) values ('bmw','abc',3);

-- Down
Drop TABLE Person;
Drop TABLE Vehicle;