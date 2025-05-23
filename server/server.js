let http = require('http');
let server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login Form</title>
            <style>
                body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f9;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                }
                .form-container {
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                width: 300px;
                }
                .form-container h1 {
                text-align: center;
                margin-bottom: 20px;
                color: #333;
                }
                .form-container input[type="text"],
                .form-container input[type="password"] {
                width: 100%;
                padding: 10px;
                margin: 10px 0;
                border: 1px solid #ccc;
                border-radius: 4px;
                }
                .form-container button {
                width: 100%;
                padding: 10px;
                background-color: #007BFF;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
                }
                .form-container button:hover {
                background-color: #0056b3;
                }
            </style>
            </head>
            <body>
            <div class="form-container">
                <h1>Login</h1>
                <form action="/login" method="GET">
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Login</button>
                </form>
            </div>
            </body>
            </html>
        `);
    }
    else if(req.url == '/register' && req.method == "GET"){
        function add(a, b) {
            return a + b;
        }
        res.end(String(add(10, 50)));
    }
    else if(req.url.startsWith('/login')  && req.method == "GET"){
        console.log(req);
        res.end("you are logged in");
    }
});
// console.log(server);
server.listen(5000, ()=>{
    console.log("server is running on port 5000");
});
