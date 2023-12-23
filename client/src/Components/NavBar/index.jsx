import { useContext } from "react";
import { TomatoIcon, ShareIcon, ConfigIcon, MoonIcon, StatisticsIcon, MenuIcon } from "../Icons"
import './styles.css'
import { SettingsModal } from "../ModalSettings";
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
                    <button onClick={() => setModalContent({ title: 'Statistics', content: <p>Statistics are not yet available</p> })}><StatisticsIcon /></button>
                </li>
                <li>
                    <button onClick={()=> {
    document.documentElement.style.setProperty('--backgroundColor', '#4d4d4d');
    document.documentElement.style.setProperty('--contentColor', '#fff4e0');
    document.documentElement.style.setProperty('--menuColor', '#660000');
    
}}><MoonIcon /></button>
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
