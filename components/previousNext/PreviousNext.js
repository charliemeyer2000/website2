import styles from "./PreviousNext.module.scss";
import Arrow from "../arrow/Arrow";
import Link from "next/link";
import classNames from "classnames";
import useSound from "use-sound";
import { useSoundContext } from "../soundToggle/SoundContext";

export default function PreviousNext({ previous, next }) {
  const mostRecentPost = next === null;
  const earliestPost = previous === null;

  const { soundOn } = useSoundContext();

  const [play, { stop }] = useSound("static/audio/cute-click.mp3", {
    volume: soundOn ? 1 : 0,
    forceSoundEnabled: true,
    preload: true,
  });

  return (
    <div
      className={classNames(
        styles.container,
        mostRecentPost && styles.containerPreviousOnly,
        earliestPost && styles.containerNextOnly
      )}
    >
      {previous && (
        <Link href={previous.slug} as={previous.slug}>
          <div className={styles.previous} onClick={play}>
            <div className={styles.arrowTextContainer}>
              <Arrow
                angle={180}
                height={1.2}
                className={classNames(styles.arrow, styles.previousArrow)}
              />
              <p className={styles.text}>Previous</p>
            </div>
            <p className={styles.title}>{previous.title}</p>
          </div>
        </Link>
      )}
      {next && (
        <Link href={next.slug} as={next.slug} onClick={play}>
          <div className={styles.next}>
            <div className={styles.arrowTextContainer}>
              <p className={styles.text}>Next</p>
              <Arrow
                angle={0}
                height={1.2}
                className={classNames(styles.arrow, styles.nextArrow)}
              />
            </div>
            <p className={styles.title}>{next.title}</p>
          </div>
        </Link>
      )}
    </div>
  );
}
