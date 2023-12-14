export function joinRoom({ socket, roomState }) {
    // join a room that already exists
    socket.on('joinRoom', async (settings) => {
        if (roomState.has(settings.roomId)) {
            socket.join(settings.roomId);
            console.log(`Socket ${socket.id} User ${settings.username} joined room ${settings.roomId}`);
        } else {
            socket.emit('error', { error: 'The room does not exist', code: 404 })
        }
    });
};
