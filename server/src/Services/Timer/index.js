import { create } from 'timrjs';

export function createTimer({ settings, roomState, io }) {
    const { workTime, breakTime, rounds } = settings;
    let timer = create(`${workTime}:00`);
    let pomodoroRounds = { total: rounds, current: rounds };
    timer.pomodoroStatus = 'work';
    function emitTimerEvent(raw) {
        io.to(settings.roomId).emit('timer',
            {
                seconds: raw.ss,
                minutes: raw.MM,
                status: timer.pomodoroStatus,
                rounds: pomodoroRounds,
                owner: settings.username,
            });
    }
    function start() {
        // send Timer data to users subscribed to the room
        timer.ticker(({ raw }) => {
            emitTimerEvent(raw)
            //If there are 0 seconds left on the timer, change the status and start a new counter
            if (!raw.SS) {
                timer.stop();
                if (pomodoroRounds.current >= 1) {
                    startNewTimer()
                } else {
                    timer.pomodoroStatus = 'finished';
                    emitTimerEvent(raw)
                }
            }
        });
    }
    // Start main timer
    start()
    // Exchange states and reset timers
    function startNewTimer() {
        if (timer.pomodoroStatus === 'work') {
            timer = create(`${breakTime}:00`);
            timer.pomodoroStatus = 'break';
            start()
            timer.start();
        } else if (timer.pomodoroStatus === 'break') {
            timer = create(`${workTime}:00`);
            timer.pomodoroStatus = 'work';
            start()
            timer.start();
            pomodoroRounds.current--
        }
    }

    return timer;
}
