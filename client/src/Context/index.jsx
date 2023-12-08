import { createContext, useState } from "react";
import { TimerUpdate } from "../Services/Timer";
import { randomNum } from "../Services/RandomNumber";
import { CatchSocketError } from "../Services/CatchSocketError";
export const PomodoroContext = createContext()
export const PomodoroProvider = ({ children }) => {

    const [timer, setTimer] = useState({
        minutes: 0,
        seconds: 0,
        rounds: { total: '0', current: '0' },
        status: 'stop'
    })
    TimerUpdate(setTimer)
    const [settings, setSettings] = useState({
        username: '',
        workTime: 25,
        breakTime: 5,
        rounds: 15,
        roomId: randomNum(1000, 9999).toString(),
    });
    const [ModalContent, setModalContent] = useState(false);
    const [appError, setError] = useState(false);
    CatchSocketError({ appError, setError })
    return (
        <PomodoroContext.Provider value={{
            timer,
            setTimer,
            settings,
            setSettings,
            ModalContent,
            setModalContent,
            appError,
            setError
        }} >
            {children}
        </PomodoroContext.Provider >)
}