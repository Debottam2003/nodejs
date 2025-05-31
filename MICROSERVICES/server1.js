const express = require('express');

const app = express();

const PORT = 5000;

// Each of these methods:

//     Registers a route handler on the Express internal routing stack (called the middleware stack).

//     The route and method type (GET, POST, etc.) are stored.

//     When a request comes in, Express matches the URL and the method against this stack.

// So:

//     GET /about triggers one handler.

//     POST /about triggers a different one.

app.get('/', (req, res) => {
    res.send('Hello, World! 5000');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is some data from server1' });
});

// POST routes
app.post('/about', (req, res) => {
    res.send('POST request to About Page');
});

app.post('/contact', (req, res) => {
    res.send('POST request to Contact Page');
});

app.post('/api/data', (req, res) => {
    res.json({ message: 'POST request received at /api/data' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});