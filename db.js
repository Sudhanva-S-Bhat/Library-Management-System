const sqlite3=require('sqlite3');

const db=new sqlite3.Database("library.db",(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log('Connecting to Database Library......');
        console.log('Connected to Database Library.');
    }
})

db.serialize(()=>{
    db.run(
        `CREATE table if NOT EXISTS LIBRARIANS(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            password TEXT
        )`,
        (err)=>{
            if(err){
                console.log(err);
            } else {
                console.log("Table Librarians Created Successfully.");
            }
        }
    )

    db.run(
        `CREATE table if NOT EXISTS STUDENTS(
            usn PRIMARY KEY,
            name TEXT,
            branch TEXT
        )`,
        (err)=>{
            if(err){
                console.log(err);
            } else {
                console.log("Table Students Created Successfully.");
            }
        }
    )

    db.run(
        `CREATE table if NOT EXISTS BOOKS(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            author TEXT,
            quantity INTEGER
        )`,
        (err)=>{
            if(err){
                console.log(err);
            } else {
                console.log("Table Books Created Successfully.");
            }
        }
    )


    db.run(
        `CREATE table if NOT EXISTS BORROWED_BOOKS(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usn TEXT,
            book_id INTEGER,
            borrow_date TEXT,
            return_date TEXT,
            status TEXT
        )`,
        (err)=>{
            if(err){
                console.log(err);
            } else {
                console.log("Table Borrowed_Books Created Successfully.");
            }
        }
    )

    db.run(
        `CREATE table if NOT EXISTS LIBRARY_VISITS(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usn TEXT,
            entry_time TEXT,
            exit_time TEXT,
            duration TEXT
        )`,
        (err)=>{
            if(err){
                console.log(err);
            } else {
                console.log("Table Library_Visits Created Successfully");
            }
        }
    )

    db.run(
        `INSERT or IGNORE into LIBRARIANS(id,name,email,password) VALUES(1,'Raghunandan','raghunandan@nmamit.in','abc@123'),
        (2,'Puneeth','raghunandan@nmamit.in','password'),
        (3,'Ananth Kumar','ananth@nmamit.in','ananth@123')`,
        (err)=>{
            if(err){
                console.log(err);
            } else {
                console.log("Inserted Values into Table Librarians Created Successfully");
            }
        }
    )

    db.run(
    `INSERT OR IGNORE INTO STUDENTS(usn,name,branch) VALUES
    ('NNM24CS357','Sudhanva S Bhat','CSE'),
    ('NNM24CS353','Shrinidhi S','CSE'),
    ('NNM24CS356','Sudhan Pai','CSE')`,
    (err)=>{
        if(err){
            console.log(err);
        } else {
            console.log("Inserted Values into Table Students Successfully.");
        }
    })

    /*db.run(
        `INSERT or IGNORE into STUDENTS(usn,name,branch) VALUES(1,'Raghunandan','raghunandan@nmamit.in','abc@123'),
        (2,'Puneeth','raghunandan@nmamit.in','password')
        (3,'Ananth Kumar','ananth@nmamit.in','ananth@123')`,
        (err)=>{
            if(err){
                console.log(err);
            } else {
                console.log("Inserted Values into Table Librarians Created Successfully");
            }
        }
    )*/

    db.all(`SELECT * from LIBRARIANs`,(err,rows)=>{
    if(err) {
        console.log(err);
    } else {
        console.log("Table : Librarians");
        console.table(rows);
    }
    })

    db.all(`SELECT * from STUDENTS`,(err,rows)=>{
        if(err) {
            console.log(err);
        } else {
            console.log("Table : STUDENTS");
            console.table(rows);
        }
    })


})



module.exports=db