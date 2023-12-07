import { useContext } from "react";
import { PomodoroContext } from "../../Context";
import { TomatoIcon, ShareIcon, ConfigIcon, MoonIcon, StatisticsIcon, MenuIcon } from "../Icons"
import './styles.css'
import { SettingsModal } from "../SettingsM";
export function NavBar() {
    const { setModalContent } = useContext(PomodoroContext);
    return (
        <nav className="navbar">
            <ul className="logo">
                <li>
                    <TomatoIcon />
                </li>
            </ul>
            <ul className="menu-nav">
                <li>
                    <button><StatisticsIcon /></button>
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
