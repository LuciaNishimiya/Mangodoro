import { useContext } from 'react';
import './styles.css';
import { CreateRoom } from '../../Services/CreateRoom';
import { ModalContext } from '../../Context/Modal';
import { RoomSettingsContext } from '../../Context/RoomSettings';
import { enqueueSnackbar } from 'notistack';
import { ModalJoin } from '../ModalJoin';

export const SettingsModal = () => {
    const { settings, setSettings } = useContext(RoomSettingsContext);
    const { setModalContent } = useContext(ModalContext);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: name === 'workTime' || name === 'breakTime' || name === 'rounds'
                ? parseInt(value, 10)
                : value,
        }));
    };

    const handleSave = (event) => {

        event.preventDefault();

        let newErrors;
        Object.keys(settings).forEach((key) => {
            if (key === 'workTime' || key === 'breakTime' || key === 'rounds') {
                if (isNaN(settings[key])) {
                    newErrors = `The ${key} field cannot be empty.`;
                }
            } else {
                if (settings[key] === '') {
                    newErrors = `The ${key} field cannot be empty.`;

                }
            }

        });
        if (newErrors) {
            enqueueSnackbar(newErrors, {
                variant: 'error'
            })
        } else {
            CreateRoom(settings)
            setModalContent(false)
        }
    };


    return (
        <><div className='ContainerSelectorButton'>
            <button className='SelectorJoinBtn MarkBtnSelected'>Create room</button>
            <button className='SelectorJoinBtn'  onClick={()=>setModalContent({ title: 'Join a room', content: <ModalJoin /> })}>join room</button>
            </div>
        <form action="" className='SettingsForm' onSubmit={handleSave}>

            <p>Account</p>
            <div className="SettingsContainer item">
                <label htmlFor="username">Username</label>
                <input
                    type="name"
                    id="username"
                    placeholder="Username"
                    maxLength="11"
                    minLength='3'
                    min="1"
                    className="input-config"
                    name="username"
                    value={settings.username}
                    onChange={handleInputChange} />
            </div>
            <p>Pomodoro</p>
            <div className="SettingsContainer">
                <div className="item">
                    <label htmlFor="workTime" className="label">Work</label>
                    <input
                        type="number"
                        id="workTime"
                        min="1"
                        max="100"
                        value={settings.workTime}
                        name="workTime"
                        onChange={handleInputChange}
                        className="input-config timeSetting" />
                </div>

                <div className="item">
                    <label htmlFor="breakTime" className="label">Break</label>
                    <input
                        className="input-config timeSetting"
                        type="number"
                        id="breakTime"
                        min="1"
                        value={settings.breakTime}
                        max="100"
                        name="breakTime"
                        onChange={handleInputChange} />
                </div>

                <div className="item">
                    <label htmlFor="rounds" className="label">Rounds</label>
                    <input
                        className="input-config timeSetting"
                        type="number"
                        id="rounds"
                        min="2"
                        max="200"
                        value={settings.rounds}
                        name="rounds"
                        onChange={handleInputChange} />
                </div>
            </div>
            <div className="item">
                <label htmlFor="roomId">Room</label>
                <input
                    placeholder="Room id"
                    className="input-config"
                    minLength='4'
                    maxLength='4'
                    value={settings.roomId}
                    name="roomId"
                    onChange={handleInputChange} />
            </div>
            <div className="item">
                <button type="submit" className="SettingsSaveBtn">Create</button>
            </div>
        </form></>
    );
};
