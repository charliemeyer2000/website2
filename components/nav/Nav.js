import styles from './Nav.module.scss';
import NavArrow from "../navArrow/NavArrow";
import useSound from "use-sound";
import ThemeToggle from '../themeToggle/ThemeToggle';
import SoundToggle from "../soundToggle/SoundToggle";

export default function Nav({ children, ...props }) {
  const { angle, text, href } = props.navArrowObject;

  const [play] = useSound("static/audio/click-short.mp3", {
    volume: 1,
    forceSoundEnabled: true,
  });

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <NavArrow href={href} angle={angle}>
          {text}
        </NavArrow>
        <div className={styles.rightWrapper}>
          <SoundToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}