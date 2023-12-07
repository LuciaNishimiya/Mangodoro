import { createContext, useState } from "react";
import { TimerUpdate } from "../Services/Timer";
export const PomodoroContext = createContext()
export const PomodoroProvider = ({ children }) => {

    const [timer, setTimer] = useState({
        minutes: 0,
        seconds: 0,
        status: 'stop'
    })
    const [ModalContent, setModalContent] = useState(false);
    TimerUpdate(setTimer)
    return (
        <PomodoroContext.Provider value={{
            timer,
            setTimer,
            ModalContent,
            setModalContent
        }} >
            {children}
        </PomodoroContext.Provider >)
}