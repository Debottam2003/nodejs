const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view eingine', 'ejs');

app.get('/', (req, res)=>{
   res.render('index.ejs');
});

app.listen(port, (port)=>{
    console.log(`Server is running on http://localhost:${port}`);
})