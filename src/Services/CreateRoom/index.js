import { socket } from "../Socket/index.js";
export const CreateRoom = (settings) => {
    socket.emit('createRoom', settings)
};
