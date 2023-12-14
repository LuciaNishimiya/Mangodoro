export function timerControls({ socket, roomState }) {
    socket.on('timerControls', async (control) => {
        const room = roomState.get(control.roomId);

        if (room && room.admins.includes(control.username)) {
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
                    socket.emit('error', { error: 'The room does not exist', code: 404 })
                    break;
            }
        }
    });

};
