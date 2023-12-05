import { ClockIcon, CouchIcon } from "../Icons"
import './styles.css'
export function Status({ status }) {
    return (
        <figure className="pomo-status">
            {status === 'work' ? <ClockIcon /> : <CouchIcon />}
        </figure>
    );
}
