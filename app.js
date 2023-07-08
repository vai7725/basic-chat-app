const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socket = require('socket.io');
const io = socket(server);

app.use(express.static('client'));

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('msg', (msg) => {
    io.emit('msg', msg);
  });
});

server.listen(3000, () => console.log('Listening to the port 3000'));
