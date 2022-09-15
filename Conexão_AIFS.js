const mysql = require ('mysql');

const con = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    database: "Malwee",
    user:"root",
    password: "root"
});
con.query('SELECT * FROM authors', (err, rows) => {
    if(err) throw err;
    console.log('Data received from Db: ');
    console.log(rows);
});
con.connect((err) =>{
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});
con.end((err) =>{
});