import { useEffect } from "react";
import { socket } from "../Socket";
export const CheckRoom = (roomId) => {
    useEffect(() => {
        socket.emit('checkRoom', roomId)
    }, [roomId]);

};
