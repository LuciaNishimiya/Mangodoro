import { useEffect } from "react";
import { socket } from "../Socket";
import { enqueueSnackbar } from "notistack";

export const CatchSocketError = ({ setError }) => {
    useEffect(() => {
        socket.on('error', (data) => {
            setError(data);
        });
        socket.on('connect_error', () => {
            enqueueSnackbar('Connection error', {
                variant: 'error'
            })
        });
        return () => {
            socket.off('error');
        };
    });

}