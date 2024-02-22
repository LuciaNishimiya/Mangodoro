import { socket } from "../Socket";
export const JoinRoom = (settings) => {
    socket.emit('joinRoom', settings)
};
