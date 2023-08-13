import styles from "./Arrow.module.scss";
import arrow from "@/static/icons/arrow.svg";
import classNames from "classnames";
import Image from "next/image";

export default function Arrow({ angle = 0, height = 2.25, className }) {
  return (
    <Image
      src={arrow}
      alt="arrow"
      className={classNames(styles.arrow, className)}
      style={{
        "--rotate": `${angle}deg`,
        "--height": `${height}rem`,
      }}
    />
  );
}
