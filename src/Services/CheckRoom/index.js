import { socket } from "../Socket/index.js";
export const CheckRoom = (roomId) => {
  socket.emit("checkRoom", roomId);
};
