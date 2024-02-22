import dotenv from "dotenv";
dotenv.config();
const pomodoroApi = process.env.POMODORO_API;

import { CheckRoom } from "../../Services/CheckRoom/index.js";
import { randomNum } from "../../Services/RandomNumber/index.js";
import { CreateRoom } from "../../Services/CreateRoom/index.js";
import { StartLive } from "../../Services/StartLive/index.js";
export const name = "create";
export const description =
  "`<tiempo_trabajo>` `<tiempo_descanso>` `<rondas>` `<id de sala>` - Inicia el Pomodoro";
export async function execute({ message, prefix, client }) {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const settingsArgs = args.join(" ").split(" ").map(Number);
  const settings = {
    username: message.author.username,
    workTime: settingsArgs[1] || 30,
    breakTime: settingsArgs[2] || 10,
    rounds: settingsArgs[3] || 5,
    roomId: settingsArgs[4] || randomNum(1000, 9999),
  };
  settings.roomId = settings.roomId.toString();
  await CreateRoom(settings);

  const url = `http://localhost:5173/pomoapi/${settings.roomId}`;
  message.reply(
    `>>> ## Sala: ${settings.roomId} \n Trabajos: ${settings.workTime} Minutos\n Descansos: ${settings.breakTime} Minutos\n Rondas: ${settings.rounds}`
  );
  StartLive({ client, message, url });
}
