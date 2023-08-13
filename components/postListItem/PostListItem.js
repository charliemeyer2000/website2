import React from "react";
import styles from "./PostListItem.module.scss";
import classNames from "classnames";
import Link from "next/link";

export default function PostListItem({ date, title, ...props }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <Link href={`/posts/${props.slug}`}>
      <div className={classNames(styles.container)}>
        <p className={styles.date}>{formattedDate}</p>
        <p className={styles.articleTitle}>{title}</p>
      </div>
    </Link>
  );
}
