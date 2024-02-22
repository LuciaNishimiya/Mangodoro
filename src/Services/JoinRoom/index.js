import { socket } from "../Socket/index.js";
export const JoinRoom = (settings) => {
  socket.emit("joinRoom", settings);
};
