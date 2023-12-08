import { useEffect } from "react";
import { socket } from "../Socket";

export const CatchSocketError = ({ setError }) => {
    useEffect(() => {
        socket.on('error', (data) => {
            setError(data);
        });
        return () => {
            socket.off('error');
        };
    });

}