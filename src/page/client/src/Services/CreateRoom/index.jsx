import { socket } from "../Socket";
export const CreateRoom = (settings) => {
    socket.emit('createRoom', settings)

};
