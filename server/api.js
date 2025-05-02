let express = require('express');
let path = require('path');
let cors = require('cors');

let app = express();
app.use(cors());

let port = 5000;

app.get('/jokes', (req, res) => {
    res.send("hello world");
});

app.listen(port, () =>{
    console.log(`Sever is running on port ${port}`);
});


