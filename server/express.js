let express = require('express');
console.log(express);
let path = require('path');
let app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'elements')))
console.log(__dirname);

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get("/api", (req, res) => {
    res.send("hello wrold");
});

app.post("/login", (req, res) => {
    console.log(req.body);
    res.send("you are logged in.");
})

app.listen(3333, () => {
    console.log("server is running on port 5000");
});
