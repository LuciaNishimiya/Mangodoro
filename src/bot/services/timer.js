const timers = {
    minutes: 0,
    seconds: 0,
    session: 0,
    sessions: 0,
    status: 'stop'
}
export function setTimers({ work, breaks, sessions, restart }) {


    const intervalSec = 1000;
    const defaultSec = 59;


    let seconds = defaultSec;

    let minutes = work--;
    let session = sessions + 1;
    let status = "work";

    if (restart) {
        minutes = work--;
        session = sessions + 1;
    }


    const interval = setInterval(function () {



        //console.log(`Minutes: ${minutes}, Seconds: ${seconds}, Session: ${session}, Status: ${status}`);


        seconds--;



        if (seconds === -1) {
            seconds = defaultSec;
            minutes--;

            if (minutes === -1) {
                if (status === "work") {
                    console.log(session)
                    session--;


                    status = "break";
                    minutes = breaks--;
                } else {
                    status = "work";
                    minutes = work--;
                }
            }
        }

        if (session) {
        timers.minutes = minutes;
        timers.seconds = seconds;
            timers.session = session;
        timers.sessions = sessions;
        timers.status = status;
        } else {
            timers.minutes = 0
            timers.seconds = 0
            timers.session = 0
            timers.status = 'stop';
            clearInterval(interval);
            console.log("¡Cuenta regresiva detenida!");
        }
    }, intervalSec);
    restart = false;
}


export { timers };
