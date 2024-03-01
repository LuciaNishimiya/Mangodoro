export function timerControls({ socket, roomState }) {
    socket.on('timerControls', async (control) => {
        const room = roomState.get(control.roomId);

        if (room){

            if (room.admins.includes(control.username)) {
                const timerControls = room.timer.controls;

                switch (control.action) {
                    case 'pause':
                        timerControls.pause();
                        break;
                    case 'stop':
                        timerControls.stop();
                        break;
                    case 'start':
                        timerControls.play();
                        break;
                    case 'next':
                        timerControls.next();
                        break;
                    default:
                        socket.emit('error', { error: 'The control command is incorrect', code: 405 })
                        break;
                }
            } else {
                socket.emit('error', { error: 'You do not have permissions to use the controls', code: 401 })
            }
        } else {
            socket.emit('error', { error: "You can't use the controls because you are not in a room", code: 400 })
        }
    });

};
