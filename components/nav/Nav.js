import styles from './Nav.module.scss';
import Link from "next/link";
import NavArrow from "../navArrow/NavArrow";
import useSound from "use-sound";
import ThemeToggle from '../themeToggle/ThemeToggle';

export default function Nav({ children, ...props }) {
  const { angle, text, href } = props.navArrowObject;

  const [play] = useSound("static/audio/click-short.mp3", {
    volume: 1,
    forceSoundEnabled: true,
  });

  return (
    <nav className={styles.nav}>
      <NavArrow href={href} angle={angle}>
        {text}
      </NavArrow>
      <div className={styles.rightWrapper}>
        <ThemeToggle />
      </div>
    </nav>
  );
}