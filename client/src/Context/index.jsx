import { createContext, useState } from "react";
import { TimerUpdate } from "../Services/Timer";
import { randomNum } from "../Services/RandomNumber";
export const PomodoroContext = createContext()
export const PomodoroProvider = ({ children }) => {

    const [timer, setTimer] = useState({
        minutes: 0,
        seconds: 0,
        rounds: { total: '0', current: '0' },
        status: 'stop'
    })
    const [settings, setSettings] = useState({
        username: '',
        workTime: 25,
        breakTime: 5,
        rounds: 15,
        roomId: randomNum(1000, 9999),
    });
    const [ModalContent, setModalContent] = useState(false);
    TimerUpdate(setTimer)
    return (
        <PomodoroContext.Provider value={{
            timer,
            setTimer,
            settings,
            setSettings,
            ModalContent,
            setModalContent
        }} >
            {children}
        </PomodoroContext.Provider >)
}