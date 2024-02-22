import { useContext, useEffect } from "react";
import { JoinSettingsContext } from "../../Context/JoinSettings";
export function useJoinIdUpdater(id) {
    const { joinSettings, setJoinSettings } = useContext(JoinSettingsContext);
    useEffect(() => {


        if (joinSettings.roomId === '') {

            setJoinSettings((prevState) => {
                const newId = prevState;
                newId.roomId = id
                return newId
            });
        }
    }, [id]);
}