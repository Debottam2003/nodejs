const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const users = {}; // Store connected users with their IDs

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Serve your HTML file
});

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle user registration (identify a user by a unique name or ID)
    socket.on('register', (username) => {
        users[username] = socket.id; // Map username to socket ID
        console.log(`${username} registered with ID: ${socket.id}`);
    });

    // Handle private messages
    socket.on('private_message', ({ to, message }) => {
        const recipientSocketId = users[to];
        if (recipientSocketId) {
            // Send the message only to the recipient
            let from = '';
            for(const k in users){
              if(users[k] === socket.id){
                from = k;
                break
              }
            }
            io.to(recipientSocketId).emit('private_message', { message, from: from });
        } else {
            // Handle case where recipient is not available
            socket.emit('error_message', `User ${to} is not connected.`);
        }
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
        // Remove the user from the list
        for (const username in users) {
            if (users[username] === socket.id) {
                delete users[username];
                break;
            }
        }
    });
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
