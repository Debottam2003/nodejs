const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Basic route
app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <form action="/submit" method="POST">
                    <input type="text" name="amarnam" required>
                    <br>
                    <input type="email" name="amaremail" required>
                    <br>
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
    `);
});
app.post("/submit", (req, res)=>{
    // console.log(req.body);
    // console.log(req.body.amarnam, req.body.amaremail);
    res.send("form submitted");
})

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});