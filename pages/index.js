import React from "react";
import Page from "@/components/page/Page";
import { Howl, Howler } from "howler";
import { useTheme } from "next-themes";
import NavArrow from "@/components/navArrow/NavArrow";
import styles from "./index.module.scss";
import Arrow from "@/components/arrow/Arrow";
import useSound from "use-sound";
import { useSoundContext } from "@/components/soundToggle/SoundContext";
import StuffItem from "@/components/stuffItem/StuffItem";
import quotes from "@/static/types/Quotes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const { soundOn } = useSoundContext();

  const [play, { stop }] = useSound("static/audio/mouse-over.wav", {
    volume: soundOn ? 1 : 0,
  });

  return (
    <Page
      title="Home"
      description="Hey, I'm Charlie Meyer. Thanks for stopping by."
    >
      <article className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.title}>Hey, I'm Charlie Meyer.</h1>
          <p className={styles.text}>
            <em>{quotes[Math.floor(Math.random() * quotes.length)]}</em>
          </p>
        </section>
        <section className={styles.section}>
          <h1 className={styles.title}>Currently</h1>
          <p className={styles.text}>
            I am a student @ UVA majoring in CS. Here are some other things that
            I do, including my clubs that I participate in, some of my
            interests, and other things. This should be multiple lines and
            should be interesting ish, but also should be incredibly humble. No
            showing off.{" "}
          </p>
        </section>
        <section className={styles.section}>
          <h1 className={styles.title}>Stuff</h1>
          <div className={styles.stuffWrapper}>
            <div className={styles.stuffItem}>
              <p className={styles.stuffItemTitle}>Projects</p>
              <div className={styles.stuffItemContent}>
                <StuffItem
                  title="HymnAi"
                  href="https://www.hymn.market"
                  angle={-45}
                  description="Create music with generative samples."
                />
                <StuffItem
                  title="Iro-Vics"
                  href="https://www.iro-vics.org"
                  angle={-45}
                  description="Go and register for VICS XXVIII."
                />
              </div>
            </div>
            <div className={styles.stuffItem}>
              <p className={styles.stuffItemTitle}>Classes, Certifications</p>
              <div className={styles.stuffItemContent}>
                <StuffItem
                  title="Cloud Practitioner"
                  href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
                  angle={-45}
                  description="On my way to being a Cloud Practitioner."
                />
                <StuffItem
                  title="Forge Launch 2023"
                  href="https://www.joinforge.co"
                  angle={-45}
                  description="Completed Forge Launch program bootcamp."
                />
              </div>
            </div>
            <div className={styles.stuffItem}>
              <p className={styles.stuffItemTitle}>Other</p>
              <div className={styles.stuffItemContent}>
                <StuffItem
                  title="Resume"
                  href="static/images/resume.pdf"
                  angle={-45}
                  description="Take a look at my general resume."
                />
                <StuffItem
                  title="Secret Project"
                  // never gonna give you up youtube link
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  angle={-45}
                  description="The next thing I'm working on."
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <h1 className={styles.title}>Future</h1>
          <p className={styles.text}>
            This is where you write about your philosophy moving forward and
            your main interests. This is <strong>some important text</strong>{" "}
            that you’ll emphasize, by the way.{" "}
          </p>
          <p className={styles.text}>
            Here you could talk about your desire to build good full-stack
            applications and how you’ll do that using AWS. You can talk about
            the certificaites that you’ll complete, like cloud practitioner and
            solutions architect. Maybe even CI/CD.
          </p>
          <p className={styles.text}>
            And then here is some longer text where you can write about larger
            aspirations, like in life. Where do you see yourself living, and
            how? Me personally i wanna be relatively mobile and live with little
            physically but be full of experiences. I want to live somewhere that
            allows me to ski, surf, skate, and also try new things that I didn’t
            know I liked until now.
          </p>
        </section>
        <section className={styles.section}>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.text}>
            Reach out to me. I'm open for opportunities.{" "}
          </p>
          <div className={styles.contactListWrapper}>
            <div
              className={styles.contactListItem}
              onMouseOver={play}
              onClick={() => {
                window.open("mailto:charlie@charliemeyer.xyz", "_blank");
              }}
            >
              <Arrow angle={0} height={1} className={styles.animatedArrow} />
              <p className={styles.contactListText}>charlie@charliemeyer.xyz</p>
            </div>
            <div
              className={styles.contactListItem}
              onMouseOver={play}
              onClick={() => {
                window.open("mailto:abs6bd@virginia.edu", "_blank");
              }}
            >
              <Arrow angle={0} height={1} className={styles.animatedArrow} />
              <p className={styles.contactListText}>abs6bd@virginia.edu</p>
            </div>
            <div
              className={styles.contactListItem}
              onMouseOver={play}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/charlie-meyer-loves-you/",
                  "_blank"
                );
              }}
            >
              <Arrow angle={0} height={1} className={styles.animatedArrow} />
              <p className={styles.contactListText}>
                charlie-meyer-loves-you on Linkedin
              </p>
            </div>
          </div>
        </section>
      </article>
    </Page>
  );
}
