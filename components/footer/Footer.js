import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.border}></div>
      <div className={styles.content}>
        <p className={styles.text}>
          Charlie Meyer - Washington, DC & San Francisco, CA
        </p>
      </div>
    </footer>
  );
}