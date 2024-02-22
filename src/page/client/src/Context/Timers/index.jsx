import { createContext, useState } from "react";
import { TimerUpdate } from "../../Services/Timer";
export const TimerContext = createContext()
export const TimerProvider = ({ children }) => {

    const [timer, setTimer] = useState({
        minutes: 0,
        seconds: 0,
        rounds: { total: '0', current: '0' },
        status: 'stop'
    })
    TimerUpdate(setTimer)
    return (
        <TimerContext.Provider value={{
            timer,
            setTimer,

        }} >
            {children}
        </TimerContext.Provider >)
}