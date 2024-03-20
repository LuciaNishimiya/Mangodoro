import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import { roomState } from './Services/RoomData/index.js';
import { createRoom } from './handlers/CreateRoom/index.js';
import { timerControls } from './handlers/TimerControls/index.js';
import { joinRoom } from './handlers/JoinRoom/index.js';
import { checkRoom } from './handlers/CheckRoom/index.js';

const port = process.env.PORT || 3000;
const app = express();
const corsOrigin = {
    origin: process.env.CORS_ORIGIN || '*',
}
app.use(cors(corsOrigin));
const server = http.createServer(app);
const io = new Server(server, {cors: corsOrigin});

io.on('connection', (socket) => {
    console.log(`Connected client: ${socket.id}`);
    createRoom({ socket, roomState, io })
    timerControls({ socket, roomState });
    joinRoom({ socket, roomState })
    checkRoom({ socket, roomState })

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});
server.listen(port, () => {
    console.log(`Server on port ${port}`);
});
