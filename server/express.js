let express = require('express');
let path = require('path');
let app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'elements')))
console.log(__dirname);
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post("/login", (req, res) => {
    console.log(req.body);
    res.send("you are logged in.");
})

app.listen(5000, () => {
    console.log("server is running on port 5000");
});
