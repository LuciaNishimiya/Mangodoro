import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { roomState } from './Services/RoomData/index.js';
import { createTimer } from './Services/Timer/index.js';

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);
io.on('connection', (socket) => {
    console.log(`Connected client: ${socket.id}`);

    socket.on('createRoom', async (settings) => {
        console.log(settings)
        // If the room does not exist, create a timer
        if (!roomState.has(settings.roomId)) {
            const timer = createTimer({ settings, roomState, io });
            // Store the timer
            roomState.set(
                settings.roomId,
                {
                    timer,
                    owner: settings.username
                });
        }

        socket.join(settings.roomId);
        console.log(`Socket ${socket.id} User ${settings.username} joined room ${settings.roomId}`);

        // If the room already exists, start the timer
        if (roomState.get(settings.roomId).timer) {        
            roomState.get(settings.roomId).timer.start();
        }
    });

    // join a room that already exists
    socket.on('joinRoom', async (settings) => {
        if (roomState.has(settings.roomId)) {
            socket.join(settings.roomId);
            console.log(`Socket ${socket.id} User ${settings.username} joined room ${settings.roomId}`);
        } else {
            socket.emit('error', { error: 'The room does not exist', code: 404 })
        }
    });

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});
server.listen(port, () => {
    console.log(`Server on port ${port}`);
});
