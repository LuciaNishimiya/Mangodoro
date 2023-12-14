import { create } from 'timrjs';

export function createTimer({ settings, roomState, io }) {
    const { workTime, breakTime, rounds } = settings;
    let timer = create(`${workTime}:00`);
    let pomodoroRounds = { total: rounds, current: rounds };
    timer.pomodoroStatus = 'work';

    // Function to emit timer events to clients
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

        // Handle pause event
        timer.onPause(() => {
            io.to(settings.roomId).emit('timer',
                {
                    seconds: timer.getRaw().ss,
                    minutes: timer.getRaw().MM,
                    status: 'pause',
                    rounds: pomodoroRounds,
                    owner: settings.username,
                });
        })
    }
    // Start main timer
    start()
    // Exchange states and reset timers
    function startNewTimer() {
        if (timer.pomodoroStatus === 'work') {
            timer.stop();
            // Create a new timer with break time
            timer = create(`${breakTime}:00`);
            timer.pomodoroStatus = 'break';
            start()
            timer.start();
        } else if (timer.pomodoroStatus === 'break') {
            timer.stop();
            // Create a new timer with work time
            timer = create(`${workTime}:00`);
            timer.pomodoroStatus = 'work';
            start()
            timer.start();
            pomodoroRounds.current--
        }
    }
    // Function to handle the next
    function next() {
        if (pomodoroRounds.current >= 1) {
            startNewTimer()
        } else {
            timer.pomodoroStatus = 'finished';
            timer.stop();
            emitTimerEvent({ ss: 0, MM: 0, })
        }
    }

    function play() {
        if (timer.status === 'stopped' || timer.pomodoroStatus === 'finished') {
            // Reset rounds counter and set status to 'work'
            pomodoroRounds = { total: rounds, current: rounds }
            timer.pomodoroStatus = 'work';
            start()
        }
        timer.start()
    }
    function pause() {
        timer.pause();
    }
    function stop() {
        timer.stop();
        timer.pomodoroStatus = 'stop'
        pomodoroRounds = { total: rounds, current: rounds }
        emitTimerEvent({ ss: 0, MM: 0, })
    }

    timer.controls = { play, next, pause, stop }
    return timer;
}
