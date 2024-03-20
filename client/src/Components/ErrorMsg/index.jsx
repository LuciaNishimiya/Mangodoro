import { useContext } from 'react';
import './styles.css';
import { SettingsModal } from '../ModalSettings';
import { ModalJoin } from '../ModalJoin';
import { AppErrorContext } from '../../Context/AppErrors';
import { ModalContext } from '../../Context/Modal';

export const ErrorMsg = () => {
    const { appError, setError } = useContext(AppErrorContext);
    const { setModalContent } = useContext(ModalContext);
        return (
            <div className="ErrorMen">
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
                        <button onClick={() => {
                            setModalContent({ title: 'join room', content: <ModalJoin /> });
                            setError(false);
                        }} className='ErrorBtn'>Try again</button>

                    </>
                ) : appError.code === 409 ? (
                    <button
                    className='ErrorBtn'
                    onClick={() => {
                        setModalContent({ title: 'Settings', content: <SettingsModal /> });
                        setError(false);
                    }}
                >
                    Create new room
                </button>
                ) : (
                    <>
                        <button onClick={() => { location.reload(); }} className='ErrorBtn'>Try again</button>
                    </>
                )}
            </div>
        );
    }


