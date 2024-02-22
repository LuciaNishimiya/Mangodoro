import { useEffect } from "react";
import { socket } from "../Socket";
export const TimerUpdate = (setData) => {
    useEffect(() => {
        socket.on('timer', (data) => {
            setData(data);
        });
        return () => {
            socket.off('timer');
        };
    });
}