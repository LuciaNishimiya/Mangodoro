import { useContext } from "react";
import { TomatoIcon, ShareIcon, ConfigIcon, MoonIcon, StatisticsIcon, MenuIcon } from "../Icons"
import './styles.css'
import { SettingsModal } from "../ModalSettings";
import { ModalContext } from "../../Context/Modal";

export function NavBar() {
  const { setModalContent } = useContext(ModalContext);
  function Menu() {
    return (
      <>
        <li>
          <button
            onClick={() =>
              setModalContent({
                title: "Statistics",
                content: <p>Statistics are not yet available</p>,
              })
            }
          >
            <span>
              <StatisticsIcon />
            </span>
            <p>Statistics</p>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              document.documentElement.style.setProperty(
                "--backgroundColor",
                "#4d4d4d"
              );
              document.documentElement.style.setProperty(
                "--contentColor",
                "#fff4e0"
              );
              document.documentElement.style.setProperty(
                "--menuColor",
                "#660000"
              );
            }}
          >
            <span>
              <MoonIcon />
            </span>

            <span>
              <p>Themes</p>
            </span>
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              setModalContent({
                title: "Settings",
                content: <SettingsModal />,
              })
            }
          >
            <span>
              <ConfigIcon />
            </span>

            <p>Settings</p>
          </button>
        </li>
        <li>
          <button>
            <span>
              <ShareIcon />
            </span>

            <p>Share room</p>
          </button>
        </li>
      </>
    );
  }
  return (
    <nav className="navbar">
      <ul className="logo">
        <li>
          <TomatoIcon />
        </li>
      </ul>
      <ul className="desktop-menu-nav">
        <Menu />
      </ul>

      <ul className="mobile-menu-nav-btn">
        <li>
          <button
            onClick={() =>
              setModalContent({
                title: "",
                content: (
                  <ul className="mobile-menu-nav">
                    <Menu />
                  </ul>
                ),
              })
            }
          >
            <MenuIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
}
