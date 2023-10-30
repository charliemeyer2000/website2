import React from "react";
import styles from "./PostListItem.module.scss";
import classNames from "classnames";
import Link from "next/link";
import useSound from "use-sound";
import { useSoundContext } from "../soundToggle/SoundContext";
import useViews from "@/utils/hooks/useViews";

export default function PostListItem({ date, title, ...props }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
  });

  const { soundOn } = useSoundContext();

  const [play] = useSound("static/audio/mouse-over.wav", {
    volume: soundOn ? 0.75 : 0,
    forceSoundEnabled: true,
  });

  const { numViews } = useViews(props.slug);

  return (
    <Link href={`/posts/${props.slug}`} onMouseOver={play} scroll={false}>
      <div className={classNames(styles.container)}>
        <>
          <p className={styles.date}>{formattedDate}</p>
          <p className={styles.articleTitle}>{title}</p>
        </>
        <p className={styles.views}>
          {new Intl.NumberFormat("en-US").format(numViews)}{" "}
          {numViews > 1 ? "views" : "view"}
        </p>
      </div>
    </Link>
  );
}
