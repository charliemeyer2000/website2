import styles from "./BackTicks.module.scss";

export default function BackTicks({ children, ...props }) {
  return (
    <span className={styles.container}>
      <span className={styles.code}>{children}</span>
    </span>
  );
}
