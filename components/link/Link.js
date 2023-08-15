import styles from "./Link.module.scss";
import Arrow from "../arrow/Arrow";
import { useSoundContext } from "../soundToggle/SoundContext";
import useSound from "use-sound";

export default function Link({ children, ...props }) {
  const { soundOn } = useSoundContext();
  const [play] = useSound("static/audio/mouse-over.wav", {
    volume: soundOn ? 1 : 0,
  });
  
  return (
    <a
      className={styles.link}
      href={props.href}
      rel="noopener noreferer"
      target={props.newWindow ? "_blank" : "_self"}
      onMouseOver={play}
    >
      {children}
    </a>
  );
}
