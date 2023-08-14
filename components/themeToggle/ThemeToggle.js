import styles from "./ThemeToggle.module.scss";
import { useTheme } from "next-themes";
import lightMode from "@/static/icons/light-mode.svg";
import darkMode from "@/static/icons/dark-mode.svg";
import Image from "next/image";
import useSound from "use-sound";
import classNames from "classnames";
import { useSoundContext } from "../soundToggle/SoundContext";

export default function ThemeToggle() {
  const { theme: activeTheme, systemTheme, setTheme } = useTheme();
  const { soundOn } = useSoundContext();

  const [play] = useSound("static/audio/wet-click.wav", {
    volume: soundOn ? 0.5 : 0,
    forceSoundEnabled: true,
  });

  return (
    <div
      onClick={() => {
        play();
        setTheme(
          activeTheme === "light" ||
            activeTheme === undefined ||
            systemTheme === undefined
            ? "dark"
            : "light"
        );
      }}
    >
      {activeTheme === "dark" ||
      activeTheme === undefined ||
      systemTheme === undefined ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classNames(
            styles.lightMode,
            activeTheme === "dark" ||
              activeTheme === undefined ||
              systemTheme === undefined
              ? styles.lightModeActive
              : ""
          )}
        >
          <circle cx="12" cy="12" r="12" fill="#E9E9E9" />
          <path
            d="M12.0172 16.746C14.6383 16.746 16.7632 14.6211 16.7632 12C16.7632 9.37887 14.6383 7.25403 12.0172 7.25403C9.39608 7.25403 7.27124 9.37887 7.27124 12C7.27124 14.6211 9.39608 16.746 12.0172 16.746Z"
            fill="#303030"
          />
          <path
            d="M19.611 13.4239C20.3974 13.4239 21.0348 12.7864 21.0348 12.0001C21.0348 11.2137 20.3974 10.5763 19.611 10.5763C18.8247 10.5763 18.1873 11.2137 18.1873 12.0001C18.1873 12.7864 18.8247 13.4239 19.611 13.4239Z"
            fill="#303030"
          />
          <path
            d="M15.8142 20C16.6005 20 17.238 19.3626 17.238 18.5763C17.238 17.7899 16.6005 17.1525 15.8142 17.1525C15.0278 17.1525 14.3904 17.7899 14.3904 18.5763C14.3904 19.3626 15.0278 20 15.8142 20Z"
            fill="#303030"
          />
          <path
            d="M8.22042 20C9.00676 20 9.64421 19.3626 9.64421 18.5763C9.64421 17.7899 9.00676 17.1525 8.22042 17.1525C7.43408 17.1525 6.79663 17.7899 6.79663 18.5763C6.79663 19.3626 7.43408 20 8.22042 20Z"
            fill="#303030"
          />
          <path
            d="M4.42379 13.4239C5.21013 13.4239 5.84758 12.7864 5.84758 12.0001C5.84758 11.2137 5.21013 10.5763 4.42379 10.5763C3.63745 10.5763 3 11.2137 3 12.0001C3 12.7864 3.63745 13.4239 4.42379 13.4239Z"
            fill="#303030"
          />
          <path
            d="M8.22042 6.84758C9.00676 6.84758 9.64421 6.21013 9.64421 5.42379C9.64421 4.63745 9.00676 4 8.22042 4C7.43408 4 6.79663 4.63745 6.79663 5.42379C6.79663 6.21013 7.43408 6.84758 8.22042 6.84758Z"
            fill="#303030"
          />
          <path
            d="M15.8142 6.84758C16.6005 6.84758 17.238 6.21013 17.238 5.42379C17.238 4.63745 16.6005 4 15.8142 4C15.0278 4 14.3904 4.63745 14.3904 5.42379C14.3904 6.21013 15.0278 6.84758 15.8142 6.84758Z"
            fill="#303030"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classNames(styles.darkMode,activeTheme === "light" ||
          activeTheme === undefined ||
          systemTheme === undefined
          ? styles.darkModeActive
          : "" )} // Assign a class for styling
        >
          <circle cx="12" cy="12" r="12" fill="#303030" />
          <path
            d="M9.13135 5.67153C9.13135 10.751 13.249 14.8687 18.3284 14.8687C19.2576 14.8687 20.1545 14.7312 21 14.4749C19.8554 18.2515 16.3472 21 12.197 21C7.11765 21 3 16.8825 3 11.8031C3 7.65283 5.74896 4.14463 9.5254 3C9.26914 3.84549 9.13135 4.74235 9.13135 5.67153Z"
            fill="#E9E9E9"
          />
        </svg>
      )}
    </div>
  );
}
