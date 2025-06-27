import mysql from 'mysql2/promise'

// let pool = await mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "okudera2003",
//     database: "deb",
//     port: 3306
// });

// let rows = await pool.query("select * from user");
// console.log(rows[0]);

let pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "okudera2003",
    database: "deb",
    port: 3306,
    maxIdle: 100,
});

let rows = await pool.query("select * from user");
console.log(rows[0]);

// let rows = await pool.query("select * from user");
// console.log(rows[0]);

// pool.getConnection(async (err, connectiron) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("data base connected");
//         let [rows] = await pool.query("select * from user");
//         console.log(rows);
//     }
// })

export default pool;