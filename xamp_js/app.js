import pool from 'mysql2/promise';

const db = pool.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'debottam',
    waitForConnections: true,
    connectionLimit: 50,
});

let [data] = await db.query("select * from users");
console.log(data);

await db.query("insert into users(userid, name) values(?, ?)", [2, 'Okudera']);

[data] = await db.query("select * from users");
console.log(data);

export default db;