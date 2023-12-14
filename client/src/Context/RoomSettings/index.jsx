import { createContext, useState } from "react";
import { randomNum } from "../../Services/RandomNumber";
export const RoomSettingsContext = createContext()
export const RoomSettingsProvider = ({ children }) => {

    const [settings, setSettings] = useState({
        username: '',
        workTime: 25,
        breakTime: 5,
        rounds: 15,
        roomId: randomNum(1000, 9999).toString(),
    });
    return (
        <RoomSettingsContext.Provider value={{
            settings,
            setSettings,

        }} >
            {children}
        </RoomSettingsContext.Provider >)
}