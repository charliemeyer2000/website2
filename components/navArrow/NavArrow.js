import styles from "./NavArrow.module.scss";
import Arrow from "../arrow/Arrow";
import useSound from "use-sound";
import Link from "next/link";
import { useSoundContext } from "../soundToggle/SoundContext";

export default function NavArrow({ angle, indicator = false, ...props }) {
  const {soundOn } = useSoundContext();
  const [play, { stop }] = useSound("static/audio/cute-click.mp3", {
    volume: soundOn ? 1 : 0,
    forceSoundEnabled: true,
    preload: true,
  });

  return (
    <Link href={props.href}>
      <div
        className={styles.container}
        onClick={play}
      >
        <Arrow
          angle={angle}
          height={2.27063}
          className={styles.transform}
          style={{
            "--rotate": `${angle}deg`,
          }}
        />
        <div className={styles.textWrapper}>
          <p className={styles.text}>{props.children}</p>
          {indicator && <div className={styles.indicator}></div>}
        </div>
      </div>
    </Link>
  );
}
