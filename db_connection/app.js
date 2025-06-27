import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        let [rows] = await pool.query("select * from user");
        res.status(200).json(rows)
    } catch (err) {
        res.status(500).send("Internal server error");
    }
});

app.get("/form", (req, res) => {
    res.send(`
        <form action="/register" method="post">
        <input type="text" name="username" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Submit</button>
        </form>
        `);
});

app.post("/register", async (req, res) => {
    try {
        let { username, email, password } = req.body;
        await pool.query("insert into user(username, email, password) values(?, ?, ?)", [username, email, password]);
        res.status(200).redirect("/");
    } catch (err) {
        res.status(500).send("Internal server error");
    }
});

app.listen(3333, () => {
    console.log("Server is listening and serving on port: 3333");
});



