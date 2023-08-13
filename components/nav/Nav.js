import styles from './Nav.module.scss';
import Link from "next/link";
import NavArrow from "../navArrow/NavArrow";
// import useNavTitles from '@/utils/hooks/useNavTitles';
import useSound from "use-sound";

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
    </nav>
  );
}