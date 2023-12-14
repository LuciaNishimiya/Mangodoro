import { createTimer } from '../../Services/Timer/index.js';
export function createRoom({ socket, roomState, io }) {
    socket.on('createRoom', async (settings) => {
        console.log('createRoom', settings);
        // If the room does not exist, create a timer
        if (!roomState.has(settings.roomId)) {
            const timer = createTimer({ settings, roomState, io });
            // Store the timer
            roomState.set(
                settings.roomId,
                {
                    timer,
                    owner: settings.username,
                    admins: [settings.username]
                });
            console.log(`Timer created for room ${settings.roomId}`);
        }

        socket.join(settings.roomId);
        console.log(`Socket ${socket.id} User ${settings.username} joined room ${settings.roomId}`);
        // If the room already exists, start the timer
        if (roomState.get(settings.roomId).timer) {
            roomState.get(settings.roomId).timer.start();
            console.log(`Timer started for room ${settings.roomId}`);
        }
    });
};
