const { createPool } = require("mysql");

const pool = createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: 'test',
    connectionLimit: 10
});

module.exports = pool;
// var mysql = require('mysql')
// var db;
// var setting = {
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'test'
// };

// function connectDatabase() {
//     if(!db){
//         db=mysql.createConnection(setting);

//         db.connect(function (err){
//             if(!err){
//                 console.log("Database connected");
//             }else{
//                 console.log("error database");
//             }
//         });
//     }
//     return db;
// }

// module.exports = connectDatabase();