import { useContext } from 'react';
import './styles.css';
import { PomodoroContext } from '../../Context';
import { CloseIcon } from '../Icons';
import { SettingsModal } from '../SettingsM';

export const ErrorMsg = () => {
    const { appError, setError, setModalContent } = useContext(PomodoroContext);

    if (appError) {
        return (
            <div className="ErrorMenu">
                <div className="ModalMenuHeader">
                    <h2>Error</h2>
                    <button onClick={() => setError(false)}>
                        <CloseIcon />
                    </button>
                </div>
                <h3 className="ErrorMsg">{appError.error}</h3>
                {appError.code === 404 ? (
                    <>
                        <button
                            className='ErrorBtn'
                            onClick={() => {
                                setModalContent({ title: 'Settings', content: <SettingsModal /> });
                                setError(false);
                            }}
                        >
                            Create new room
                        </button>
                        <button onClick={() => { location.reload(); }} className='ErrorBtn'>Try again</button>

                    </>
                ) : appError.code === 409 ? (
                    <>
                        <button onClick={() => { }} className='ErrorBtn'></button>
                        <button onClick={() => { location.reload(); }} className='ErrorBtn'>Try again</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => { location.reload(); }} className='ErrorBtn'>Try again</button>
                    </>
                )}
            </div>
        );
    }

};
