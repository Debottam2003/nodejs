const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Set the path to the HTML file
    const filePath = path.join(__dirname, 'index.html');

    // Read the HTML file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
            return;
        }

        // Respond with the HTML file
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

// Listen on port 5000
server.listen(5000, () => {
    console.log('Server running at http://localhost:5000/');
});
