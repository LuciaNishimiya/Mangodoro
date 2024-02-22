import { socket } from "../Socket";
export const TimerControls = (control) => {
    socket.emit('timerControls', control)
};
