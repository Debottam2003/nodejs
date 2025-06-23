import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.postgres_URL,
    max: 100
});

// IIFE
(async () => {
    const result = await pool.query('SELECT * FROM users');
    console.log(result.rows);
})();

(async function () {
    const result = await pool.query('SELECT * FROM users');
    console.log(result.rows);
})();

(async function dbCall() {
    const result = await pool.query('SELECT * FROM users');
    console.log(result.rows);
})();

const app = express();
const PORT = process.env.PORT;

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});