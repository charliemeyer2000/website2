import Arrow from "../arrow/Arrow";
import Link from "../link/Link";
import styles from "./StuffItem.module.scss";
import useSound from "use-sound";
import { useSoundContext } from "../soundToggle/SoundContext";

export default function StuffItem({
  title,
  angle,
  description,
  href,
  ...props
}) {
  const { soundOn } = useSoundContext();
  const [play, { stop }] = useSound("static/audio/mouse-over.wav", {
    volume: soundOn ? 1 : 0,
  });

  return (
    <div className={styles.container}>
      <div className={styles.top} onMouseEnter={play}>
        <Link href={href}>{title}</Link>
        <Arrow angle={angle} height={0.694} className={styles.animatedArrow} />
      </div>
      <p className={styles.text}>{description}</p>
    </div>
  );
}
