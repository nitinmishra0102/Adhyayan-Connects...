const mysql = require('mysql2');
const { dbHost, dbUser, dbPassword, dbName} = require('./env'); // Import from env.js


const JobPortalConnection = mysql.createConnection({
    host: dbHost,
    user:dbUser,
    password:dbPassword,
    database:dbName,
});


JobPortalConnection.connect((err)=>{
    if(err){
        console.error("Error connection to MYSQL:",err);
        return;
    }
    console.log("Connected to MySQL database");
});

module.exports = JobPortalConnection.promise();