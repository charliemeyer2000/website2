import styles from "./GuestbookNote.module.scss";
import { useSoundContext } from "@/components/soundToggle/SoundContext";
import useSound from "use-sound";

export default function GuestbookNote(props) {
  const { date, note, author } = props;
  const { soundOn } = useSoundContext();

  const [play] = useSound("static/audio/mouse-over.wav", {
    volume: soundOn ? 0.75 : 0,
    forceSoundEnabled: true,
  });
  return (
    <div className={styles.container} onMouseOver={play}>
      <div className={styles.leftWrapper}>
        <p className={styles.date}>{date}</p>
        <p className={styles.note}>{note}</p>
      </div>

      <p className={styles.author}>{author}</p>
    </div>
  );
}
