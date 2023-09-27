export const name = 'settimer';
import { setTimers } from '../../services/timer.js';
export const description = 'Para el pomodoro.';
export async function execute({ message, prefix }) {

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const timerArgs = args.join(' ').split(' ').map(Number);
    const timers = {
        minWork: timerArgs[1] || 30,
        minBreak: timerArgs[2] || 10,
        nRounds: timerArgs[3] || 10
    };

    setTimers({ work: timers.minWork, breaks: timers.minBreak, sessions: timers.nRounds, restart: true })
    message.reply(`>>> ## Se configuro\n Trabajos: ${timers.minWork} Minutos\n Descansos: ${timers.minBreak} Minutos\n Rondas: ${timers.nRounds}`);
}

