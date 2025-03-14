let http = require('http');
let server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === "GET") {
        res.write("Hello, ");
        res.write("World!");
        res.end("hello world");
    }
    else if (req.url === '/about' && req.method === "GET") {
        res.end("About Page");
    } else if (req.url === '/contact' && req.method === "GET") {
        res.end("Contact Page");
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});
server.listen(4000, () => {
    console.log("running...");
});