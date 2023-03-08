const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { server } = require('socket.io');
const io = new Server(server);

app.get('/',(req,res)=>{
    res.sendFile(__dirname,'/index.html');
});

io.on('connection',(Socket)=>{
    console.log('a user connected')
    Socket.on('disconnected',()=>{
        console.log('user disconnected')
    })
    io.on('connection', (socket) => {
        console.log('a user connectd')
        });
        io.on('connection', (socket) => {
            socket.broadcast.emit('hi');
          });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
      });

})

server.listen(3000,()=>{
    console.log('listening on port 3000');
});