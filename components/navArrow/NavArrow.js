import styles from "./NavArrow.module.scss";
import Arrow from "../arrow/Arrow";
import useSound from "use-sound";
import Link from "next/link";
export default function NavArrow({ angle, indicator = false, ...props }) {
  const [play, { stop }] = useSound("static/audio/cute-click.mp3", {
    volume: 1,
    forceSoundEnabled: true,
    preload: true,
  });

  return (
    <Link href={props.href}>
      <div
        className={styles.container}
        onMouseEnter={play}
        onMouseLeave={() => stop()}
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
