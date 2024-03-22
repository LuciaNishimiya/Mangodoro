export function checkRoom({ socket, roomState }) {
    // Check if a room exists
    socket.on('checkRoom', async (roomId) => {

        if (roomState.has(roomId)) {
            const room = roomState.get(roomId);
            socket.emit('checkRoom', { 
                exist: true,
                status: room.pomodoroStatus, 
                owner: room.owner,
                admins: room.admins,
            });
        } 
        else {
            socket.emit('error', { error: 'The room does not exist', code: 404 })
        }
    });

};
