
import { useContext } from 'react';
import { RoomSettingsContext } from '../../Context/RoomSettings';
import { NextIcon, StartIcon, PauseIcon, StopIcon } from '../Icons'
import './styles.css'
import { TimerControls } from '../../Services/TimerControls';
import { JoinSettingsContext } from '../../Context/JoinSettings';

export function Controls({ status }) {
    const { settings } = useContext(RoomSettingsContext);
    const { joinSettings } = useContext(JoinSettingsContext);
    function controls(action) {
        if (settings.username !== '') {
            TimerControls({ action, ...settings })
        }
        if (joinSettings.username !== '') {
            TimerControls({ action, ...joinSettings })
        }
    }
    return (
        <div className="controls">
            <button onClick={() =>
                (status === 'pause' || status === 'stop' || status === 'finished') ?
                    controls('start') : controls('pause')}
            >
                {status === 'pause' || status === 'stop' || status === 'finished' ?
                    <StartIcon /> : <PauseIcon />}
            </button>
            <button onClick={() => { controls('stop') }}><StopIcon /></button>
            <button onClick={() => { controls('next') }}><NextIcon /></button>
        </div>
    )
}