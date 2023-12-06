import { createContext, useState } from "react";
import { TimerUpdate } from "../Services/Timer";
export const PomodoroContext = createContext()
export const PomodoroProvider = ({ children }) => {
    const [timer, setTimer] = useState({ minutes: 0, seconds: 0, status: 'stop' })
    TimerUpdate(setTimer)
    return (
        <PomodoroContext.Provider value={{
            timer,
            setTimer
        }} >
            {children}
        </PomodoroContext.Provider >)
}