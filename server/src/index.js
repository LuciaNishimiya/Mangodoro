import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cros from 'cors'
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);



app.listen(port, () => {
    console.log(`Server on port ${port}`);
})