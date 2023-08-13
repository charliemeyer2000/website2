import styles from "./Arrow.module.scss";
import arrow from "@/static/icons/arrow.svg";
import darkArrow from "@/static/icons/arrow-dark.svg";
import classNames from "classnames";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function Arrow({ angle = 0, height = 2.25, className }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" || null;
  return (
    <Image
      src={isDark ? arrow : darkArrow }
      alt="arrow"
      className={classNames(styles.arrow, className)}
      style={{
        "--rotate": `${angle}deg`,
        "--height": `${height}rem`,
      }}
    />
  );
}
