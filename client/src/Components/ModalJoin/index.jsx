import { useContext } from 'react';
import './styles.css';
import { JoinSettingsContext } from '../../Context/JoinSettings';
import { JoinRoom } from '../../Services/JoinRoom';
import { ModalContext } from '../../Context/Modal';
import { enqueueSnackbar } from 'notistack';

export const ModalJoin = () => {
    const { joinSettings, setJoinSettings } = useContext(JoinSettingsContext);
    const { setModalContent } = useContext(ModalContext);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setJoinSettings((prevSettings) => ({
            ...prevSettings,
            [name]: value,
        }));
    };

    const handleSave = (event) => {
        event.preventDefault();

        let newErrors;
        Object.keys(joinSettings).forEach((key) => {
            if (joinSettings[key] === '') {
                newErrors = `The ${key} field cannot be empty.`;
            }

        });
        if (newErrors) {
            enqueueSnackbar(newErrors, {
                variant: 'error'
            })
        } else {
            JoinRoom(joinSettings)
            setModalContent(false)
        }
    };


    return (
        <form action="" className='JoinSettingsForm' onSubmit={handleSave}>
            <p>Account</p>
            <div className="JoinSettingsContainer JoinItem">
                <label htmlFor="username">Username</label>
                <input
                    type="name"
                    id="username"
                    placeholder="Username"
                    maxLength="11"
                    minLength='3'
                    min="1"
                    name="username"
                    value={joinSettings.username}
                    onChange={handleInputChange}
                />
            </div>
            <p>Pomodoro</p>
            <div className="SettingsContainer">
                <div className="item">
                    <label htmlFor="roomId">Room</label>
                    <input
                        placeholder="Room id"
                        minLength='4'
                        maxLength='4'
                        value={joinSettings.roomId}
                        name="roomId"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="item">
                <button type="submit" className="SettingsSaveBtn">Join</button>
            </div>
        </form>
    );
};
