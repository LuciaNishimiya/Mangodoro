export function checkRoom({ socket, roomState }) {
    // Check if a room exists
    socket.on('checkRoom', async (roomId) => {
        if (!roomState.has(roomId)) {
            socket.emit('error', { error: 'The room does not exist', code: 404 })
        }
    });

};
