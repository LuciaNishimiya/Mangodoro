import './styles.css'
import { CloseIcon } from "../Icons"
import { useContext } from 'react';
import { ModalContext } from '../../Context/Modal';
export const Modal = () => {
    const { ModalContent, setModalContent } = useContext(ModalContext);
    if (ModalContent) return (

        <div className="ModalMenu">
            <div className="ModalMenuHeader">
                <h2>{ModalContent.title}</h2>
                <button onClick={() => { setModalContent(false) }}>
                    <CloseIcon />
                </button>
            </div>
            <div className="ModalMenuContainer">{ModalContent.content}</div>
        </div>
    )
}