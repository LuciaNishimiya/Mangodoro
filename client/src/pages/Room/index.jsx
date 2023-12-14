import { Home } from "../Home";
import { useParams } from "react-router-dom";
import { CheckRoom } from "../../Services/CheckRoom";
import { useJoinIdUpdater } from "../../hooks/JoinIdUpdater";
import { useOpenJoinMenu } from "../../hooks/OpenJoinMenu";
import { useOpenErrorMenu } from '../../hooks/OpenErrorMenu';
export function Room() {
    const { id } = useParams();
    useOpenErrorMenu()
    CheckRoom(id)
    useOpenJoinMenu(id)
    useJoinIdUpdater(id);

    return (
        <Home />
    )

}