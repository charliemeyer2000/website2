import styles from "./ThemeToggle.module.scss";
import { useTheme } from "next-themes";
import lightMode from "@/static/icons/light-mode.svg";
import darkMode from "@/static/icons/dark-mode.svg";
import Image from "next/image";
import useSound from "use-sound";

export default function ThemeToggle() {
    const { theme: activeTheme, systemTheme, setTheme } = useTheme();

  const [play] = useSound("static/audio/wet-click.wav", {
    volume: 0.5,
    forceSoundEnabled: true,
  });

  return (
    <div className={styles.container} onClick={play}>
      <Image
        src={activeTheme === "dark" || activeTheme === undefined ? lightMode : darkMode}
        alt="Toggle theme"
        width={24}
        height={24}
        onClick={() => setTheme(activeTheme === "light" || activeTheme === undefined ? "dark" : "light")}
      />
    </div>
  );
}
