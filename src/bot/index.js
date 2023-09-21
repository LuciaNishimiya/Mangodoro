import { PORT, TOKEN, PREFIX } from './../config.js'

import express from 'express';
import cors from 'cors';
import { Client } from 'discord.js-selfbot-v13';
const client = new Client();

import { setTimers, timers } from './services/timer.js';
import ttsfn from './services/tts.js';


async function tts(text) {
    try {
        const url = await ttsfn({ text: text });
        console.log('URL del archivo descargado:', url);
    } catch (error) {
        console.error('Error:', error);
    }
}
// prueba de funciones
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


client.on('message', (message) => {
    if (!message.content.startsWith(PREFIX)) return;
    const SUS = { embed: '`' }

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'help':
            message.reply(`# ¡Hola! Estoy aquí para ayudarte! \n ## Lista de Comandos \n - ${SUS.embed} !pomo sus${SUS.embed} gfgfgfdgdfg vbhgh \n - ${SUS.embed} !pomo sus${SUS.embed} \n - ${SUS.embed} !pomo sus${SUS.embed} \n - ${SUS.embed} !pomo sus${SUS.embed}\n - sus`);
            break;
        case 'tts':
            tts(message.content)
            break;
        default:
            message.reply(`# uso ${SUS.embed} !pomo sus${SUS.embed}`);
            break;
    }
});


client.on('ready', () => {
    console.log(`Bot ${client.user.tag} está en línea.`);
});
client.login(TOKEN);

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});



