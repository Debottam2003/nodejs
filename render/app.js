let express = require('express');
let cors = require('cors');
let { Pool } = require('pg');

const pool = new Pool({
    connectionString: "postgresql://users_enke_user:yLrA5s85Ro4tPkZ1BAVdd8v4vrIYAusg@dpg-d0svog49c44c73fj8mig-a.oregon-postgres.render.com/users_enke",
    ssl: {
        rejectUnauthorized: false,
    },
});

pool.connect()
    .then(() => {
        console.log("Connected to PostgreSQL");
        const createTable = async () => {
            try {
                await pool.query(`
      CREATE TABLE IF NOT EXISTS users_enke (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE
      );
    `);
                console.log('Table created');
            } catch (err) {
                console.error('Error creating table:', err);
            } finally {
                pool.end();
            }
        };

        createTable();
    })
    .catch(err => console.error("Connection error", err));



let app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("Lets connect to the cloud");
});

app.listen(5000, () => {
    console.log("The server is listening on port 5000");
});