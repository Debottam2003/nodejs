const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname,'index.html'));
   res.render(path.join(__dirname,'index.ejs'));
  //res.sendFile('C:\\Users\\DEBOTTAM\\OneDrive\\Desktop\\nodejs\\index.html');  // Serves the index.html file
});


app.listen(3003, () => {
  console.log(`Server running on port 3003`);
});
