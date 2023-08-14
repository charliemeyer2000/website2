import styles from './Footer.module.scss';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.box}>
                    <p className={styles.text}>Home</p>
                    <p className={styles.text}>Posts</p>
                    <p className={styles.text}>Contact</p>
                </div>
                <div className={styles.box}>
                    <p className={styles.text}>Linkedin</p>
                    <p className={styles.text}>GitHub</p>
                    <p className={styles.text}>YouTube</p>
                </div>
                <div className={styles.box}>
                    <p className={styles.text}>Venmo</p>
                    <p className={styles.text}>PayPal</p>
                    <p className={styles.text}>Bitcoin</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p className={styles.text}>© 2023 Charlie Meyer - Washington, DC & Charlottesville, VA</p>
            </div>
        </footer>
    )
}