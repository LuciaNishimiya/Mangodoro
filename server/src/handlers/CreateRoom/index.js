import { createTimer } from '../../Services/Timer/index.js';
export function createRoom({ socket, roomState, io }) {
    socket.on('createRoom', async (settings) => {
        const timer = createTimer({ settings, roomState, io });
        function createNewRoom(){
            const newRoom = {
                timer,
                owner: settings.username,
                admins: [settings.username]
            };
            roomState.set(settings.roomId, newRoom);
            console.log(`Timer created for room ${settings.roomId}`);
            roomState.get(settings.roomId).timer.start();   
            socket.join(settings.roomId); 
        }

        if (roomState.has(settings.roomId)) {
            const room = roomState.get(settings.roomId);
            if (io.sockets.adapter.rooms.get(settings.roomId)?.size){
                if(room.admins.includes(settings.username)){
                    room.timer.controls.stop();
                    room.timer = timer;
                    room.timer.start();
                } else {
                    socket.emit('error', { error: 'This room already exists', code: 409 })
                }
            } else { 
                createNewRoom()
            }
        } else { 
            createNewRoom()
        }
    });
};
