import dotenv from "dotenv";
dotenv.config();
const pomodoroApi = process.env.POMODORO_API;

import { CheckRoom } from "../../Services/CheckRoom/index.js";
import { JoinRoom } from "../../Services/JoinRoom/index.js";
import { StartLive } from "../../Services/StartLive/index.js";
export const name = "join";
export const description = "`<id de sala>` - Entrar a una sala existente";
export async function execute({ message, prefix, client }) {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const settingsArgs = args.join(" ").split(" ").map(Number);
  const settings = {
    username: message.author.username,
    roomId: settingsArgs[1],
  };
  settings.roomId = settings.roomId.toString();
  await JoinRoom(settings);

  const url = `http://localhost:5173/pomoapi/${settings.roomId}`;
  message.reply(`>>> ## Sala: ${settings.roomId}`);
  StartLive({ client, message, url });
}
