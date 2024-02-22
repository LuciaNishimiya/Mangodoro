import { createContext, useState } from "react";
import { CatchSocketError } from "../../Services/CatchSocketError";
export const AppErrorContext = createContext()
export const AppErrorProvider = ({ children }) => {
    const [appError, setError] = useState(false);
    CatchSocketError({ appError, setError })
    return (
        <AppErrorContext.Provider value={{
            appError,
            setError
        }} >
            {children}
        </AppErrorContext.Provider >)
}