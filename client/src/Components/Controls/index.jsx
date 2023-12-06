import { NextIcon, StartIcon, StopIcon } from '../Icons'
import './styles.css'
export function Controls() {
    return (
        <div className="controls">
            <button><StartIcon /></button>
            <button><StopIcon /></button>
            <button><NextIcon /></button>
        </div>
    )
}