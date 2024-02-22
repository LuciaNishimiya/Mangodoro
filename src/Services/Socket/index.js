import io from "socket.io-client";
import dotenv from "dotenv";
dotenv.config();
const pomodoroApi = process.env.POMODORO_API;
export const socket = io(pomodoroApi);
