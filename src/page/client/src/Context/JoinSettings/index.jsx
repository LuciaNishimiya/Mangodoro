import { createContext, useState } from "react";
export const JoinSettingsContext = createContext()
export const JoinSettingsProvider = ({ children }) => {

    const [joinSettings, setJoinSettings] = useState({
        roomId: '',
        username: ''
    })
    return (
        <JoinSettingsContext.Provider value={{
            joinSettings, setJoinSettings
        }} >
            {children}
        </JoinSettingsContext.Provider >)
}