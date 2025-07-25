import React from "react";
import styles from "./PostListItem.module.scss";
import classNames from "classnames";
import Link from "next/link";
import useSound from "use-sound";
import { useSoundContext } from "../soundToggle/SoundContext";
import useViews from "@/utils/hooks/useViews";
import { motion } from "framer-motion";

export default function PostListItem({ date, title, ...props }) {
  // Detect Safari and disable animations to prevent flicker
  const isSafari =
    typeof window !== "undefined" &&
    /Safari/.test(navigator.userAgent) &&
    !/Chrome/.test(navigator.userAgent);

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
  });

  const { soundOn } = useSoundContext();

  const handleNumberFormatting = (num) => {
    if (typeof num !== "number") return num;
    return new Intl.NumberFormat("en-US").format(num);
  };

  const [play] = useSound("static/audio/mouse-over.wav", {
    volume: soundOn ? 0.75 : 0,
    forceSoundEnabled: true,
  });

  const { numViews } = useViews(props.slug);

  return (
    <Link href={`/posts/${props.slug}`} onMouseOver={play} scroll={false}>
      {isSafari ? (
        // For Safari, use regular div without animation
        <div className={classNames(styles.container)} style={{ opacity: 0.5 }}>
          <>
            <p className={styles.date}>{formattedDate}</p>
            <p className={styles.articleTitle}>{title}</p>
          </>
          <p className={styles.views}>
            {`${handleNumberFormatting(numViews)} ${
              numViews !== 1 ? "views" : "view"
            }`}
          </p>
        </div>
      ) : (
        // For other browsers, use animated motion.div
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1 }} // Adjust the duration as needed
          className={classNames(styles.container)}
        >
          <>
            <p className={styles.date}>{formattedDate}</p>
            <p className={styles.articleTitle}>{title}</p>
          </>
          <p className={styles.views}>
            {`${handleNumberFormatting(numViews)} ${
              numViews !== 1 ? "views" : "view"
            }`}
          </p>
        </motion.div>
      )}
    </Link>
  );
}
