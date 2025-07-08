import styles from "./Footer.module.scss";
import Clock from "@/components/clock/Clock";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.border}></div>
      <div className={styles.content}>
        <p className={styles.text}>San Francisco, CA</p>
        <div className={styles.rightSection}>
          <span className={styles.year}>{new Date().getFullYear()}</span>
          <Clock />
        </div>
      </div>
    </footer>
  );
}
