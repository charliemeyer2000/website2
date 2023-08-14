import React from "react";
import styles from "./PostListItem.module.scss";
import classNames from "classnames";
import Link from "next/link";
import useSound from "use-sound";
import { useSoundContext } from "../soundToggle/SoundContext";

export default function PostListItem({ date, title, ...props }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
  });

  const {soundOn } = useSoundContext();

  const [play] = useSound("static/audio/mouse-over.wav", {
    volume: soundOn ? 0.75 : 0,
    forceSoundEnabled: true,
  });

  return (
    <Link href={`/posts/${props.slug}`} onMouseOver={play}>
      <div className={classNames(styles.container)}>
        <p className={styles.date}>{formattedDate}</p>
        <p className={styles.articleTitle}>{title}</p>
      </div>
    </Link>
  );
}
