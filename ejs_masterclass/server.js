import { fileURLToPath } from "url";
import express from 'express';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 28 }
];

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

console.log(__dirname);
console.log(__filename);

app.get("/form", (req, res) => {
    res.render('form');
});

app.post("/formSubmit", (req, res) => {
    console.log(req.body);
    res.send('form submitted');
});

app.get('/home', (req, res) => {
    res.render('home', { data: [{ name: "debottam kar", age: 22 }] });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { name, age } = req.body;
    console.log(name, age);
    res.redirect('/landing');
});

app.get('/landing', (req, res) => {
    res.render('landing');
});

app.get('/landingPageData', (req, res) => {
    setTimeout(() => {
        res.status(200).json(users);
    }, 5000);
});

app.listen(3333, () => {
    console.log("Server is running on port 3333");
});

