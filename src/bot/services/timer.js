const timers = {
    minutes: 0,
    seconds: 0,
    session: 0,
    sessions: 0,
    status: 0,
}
export function setTimers({ stop, work, breaks, sessions }) {

    const intervalSec = 1000;
    const defaultSec = 59;

    let seconds = defaultSec;
    let minutes = work;
    let session = sessions || 0;
    let status = "work";

    const interval = setInterval(function () {



        //console.log(`Minutes: ${minutes}, Seconds: ${seconds}, Session: ${session}, Status: ${status}`);


        seconds--;

        if (seconds === -1) {
            seconds = defaultSec;
            minutes--;

            if (minutes === -1) {
                if (status === "work") {
                    if (session) {
                        session--;
                        if (session === 0) {
                            stop = true;
                        }
                    }
                    status = "break";
                    minutes = breaks;
                } else {
                    status = "work";
                    minutes = work;
                }
            }
        }

        if (stop) {
            clearInterval(interval);
            console.log("¡Cuenta regresiva detenida!");
        }


        timers.minutes = minutes;
        timers.seconds = seconds;
        timers.session = session;
        timers.sessions = sessions;
        timers.status = status;


    }, intervalSec);
}

export { timers };
