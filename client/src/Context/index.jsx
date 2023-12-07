import { createContext, useState } from "react";
import { TimerUpdate } from "../Services/Timer";
export const PomodoroContext = createContext()
export const PomodoroProvider = ({ children }) => {

    const [timer, setTimer] = useState({
        minutes: 0,
        seconds: 0,
        status: 'stop'
    })
    const [settings, setSettings] = useState({
        username: '',
        workTime: 25,
        breakTime: 5,
        rounds: 15,
        roomId: '1343',
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