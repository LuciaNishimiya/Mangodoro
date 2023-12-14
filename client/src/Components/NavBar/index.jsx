import { useContext } from "react";
import { TomatoIcon, ShareIcon, ConfigIcon, MoonIcon, StatisticsIcon, MenuIcon } from "../Icons"
import './styles.css'
import { SettingsModal } from "../ModalSettings";
import { ModalJoin } from "../ModalJoin";
import { ModalContext } from "../../Context/Modal";
export function NavBar() {
    const { setModalContent } = useContext(ModalContext);
    return (
        <nav className="navbar">
            <ul className="logo">
                <li>
                    <TomatoIcon />
                </li>
            </ul>
            <ul className="menu-nav">
                <li>
                    <button onClick={() => setModalContent({ title: 'Join a room', content: <ModalJoin /> })}><StatisticsIcon /></button>
                </li>
                <li>
                    <button><MoonIcon /></button>
                </li>
                <li>

                    <button onClick={() => setModalContent({ title: 'Settings', content: <SettingsModal /> })}><ConfigIcon /></button>
                </li>
                <li>
                    <button><ShareIcon /></button>
                </li>
            </ul>
            <ul className="mobile-menu-nav">
                <li>
                    <button><MenuIcon /></button>
                </li>
            </ul>
        </nav>
    );
}
