import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { create } from 'timrjs'
const timer = create('10:00');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const timers = new Map();
io.on('connection', async (socket) => {
    console.log(`Client connected: ${socket.id}`);

    timer.ticker(({ raw }) => {
        socket.emit('timer', { seconds: raw.ss, minutes: raw.mm, status: 'work' });
    });


    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});
server.listen(port, () => {
    console.log(`Server on port ${port}`);
});

timer.start()