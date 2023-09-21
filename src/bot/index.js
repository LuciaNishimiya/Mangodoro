import express from 'express';
import cors from 'cors';
import { setTimers, timers } from './services/timer.js';

import tts from './services/tts.js';
const PORT = 4000

async function main() {
    try {
        const url = await tts({ text: 'holaaaaa', fileId: 1 });
        console.log('URL del archivo descargado:', url);
    } catch (error) {
        console.error('Error:', error);
    }
}
// prueba de funciones
main();
setTimers({ stop: false, work: 1, breaks: 1, });

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.get("/api/timers", (_req, res) => {

    res.json(timers);

});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});



