const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res, next) => {
    res.status(200).send('<h1>This is the server on 4000</h1>');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});