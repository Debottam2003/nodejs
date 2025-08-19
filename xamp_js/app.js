import pool from 'mysql2/promise';

const db = pool.createPool({
    host: '192.168.183.80',
    user: 'mysql',
    password: 'mysql2003',
    database: 'debottam',
    waitForConnections: true,
    connectionLimit: 50,
});

// let [data] = await db.query("select * from users");
// console.log(data);

// await db.query("insert into users(userid, name) values(?, ?)", [2, 'Okudera']);

let [data] = await db.query("select * from users");
console.log(data);

export default db;