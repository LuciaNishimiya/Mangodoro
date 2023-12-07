import { create } from 'timrjs'

export function createTimer({ settings, roomState }) {

    const { workTime, rounds, } = settings
    let timer = create(`${workTime}:00`);
    timer.pomodoroStatus = 'work'
    timer.pomodoroRounds

    return timer

}

