import styles from './Footer.module.scss';
import useSound from "use-sound";
import { useSoundContext } from "../soundToggle/SoundContext";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";

export default function Footer() {
  const { soundOn } = useSoundContext();

  const [play, { stop }] = useSound("static/audio/mouse-over.wav", {
    volume: soundOn ? 1 : 0,
    forceSoundEnabled: true,
    preload: true,
  });

  const [copied, setCopied] = useState(false);

  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={styles.border}></div>
      <div className={styles.top}>
        <div className={styles.box}>
          <Link href="/">
            <p
              className={styles.text}
              onMouseOver={play}
              onClick={() => {
                window.open("https://www.linkedin.com/in/charlie-meyer-loves-you", "_blank");
              }}
            >
              Linkedin
            </p>
          </Link>
          <Link href="https://calendly.com/abs6bd-virginia/1-1-with-charlie">
            <p className={styles.text} onMouseOver={play}>
              Schedule a call w/me!
            </p>
          </Link>
          <p
            className={classNames(styles.text, "contactFooterText")}
            onMouseOver={play}
            onClick={() => {
              window.open("mailto:charlie@charliemeyer.xyz", "_blank");
            }}
          >
            Email
          </p>
        </div>
        <div className={styles.box}>
          <p
            className={styles.text}
            onMouseOver={play}
            onClick={() => {
              window.open(
                "https://bsky.app/profile/charliemeyer.xyz",
                "_blank"
              );
            }}
          >
            Bluesky
          </p>
          <p
            className={styles.text}
            onMouseOver={play}
            onClick={() => {
              window.open("https://www.github.com/charliemeyer2000", "_blank");
            }}
          >
            GitHub
          </p>
          <p
            className={styles.text}
            onMouseOver={play}
            onClick={() => {
              window.open("https://www.x.com/charlie_meyer_", "_blank");
            }}
          >
            Twitter/X
          </p>
        </div>
        <div className={styles.box}>
          <p
            className={styles.text}
            onMouseOver={play}
            onClick={() => {
              window.open(
                "https://account.venmo.com/u/charlie-meyer-29",
                "_blank"
              );
            }}
          >
            Venmo
          </p>
          <p
            className={styles.text}
            onMouseOver={play}
            onClick={() => {
              window.open(
                "https://www.paypal.com/paypalme/charliemeyer2026",
                "_blank"
              );
            }}
          >
            PayPal
          </p>
          <p
            className={styles.text}
            onMouseOver={play}
            onClick={() => {
              setCopied(true);
              navigator.clipboard.writeText(
                "1GbDcN3Gne3C9p3XEqHSCnTo7QL8CyCRdg"
              );
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
          >
            {copied ? "Copied to clipboard" : "Bitcoin"}
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.regularText}>
          © 2023 Charlie Meyer - Washington, DC & Charlottesville, VA
        </p>
      </div>
    </footer>
  );
}