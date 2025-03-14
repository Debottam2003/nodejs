const express = require('express');
let fs = require('fs');
let os = require('os');

console.log(os.cpus());
console.log(os.userInfo());

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    // let stream = fs.createReadStream('./huge.txt', 'utf-8');
    // stream.on("data",(chunk)=>{
    //     res.write(chunk);
    // });
    // stream.on("end",()=>{
    //     res.end();
    // });
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});