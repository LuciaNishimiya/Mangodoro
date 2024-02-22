import { Home } from "../Home";
import { useParams } from "react-router-dom";
import { CheckRoom } from "../../Services/CheckRoom";
import { useJoinIdUpdater } from "../../hooks/JoinIdUpdater";
import { useOpenJoinMenu } from "../../hooks/OpenJoinMenu";
import { useOpenErrorMenu } from '../../hooks/OpenErrorMenu';
import { JoinRoom } from "../../Services/JoinRoom";
export function Room() {
    const { id } = useParams();
    let sus = true
    if(sus){
        sus = false
        JoinRoom({
            roomId: id,
            username: 'POMOMO'
        })
    }
    
    useOpenErrorMenu()
    CheckRoom(id)
    useJoinIdUpdater(id);

    return (
        <Home />
    )

}