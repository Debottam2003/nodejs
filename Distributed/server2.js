const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('This is the server on 5000 from laptop');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});