import React from "react";
import Page from "@/components/page/Page";
import styles from "./index.module.scss";
import Arrow from "@/components/arrow/Arrow";
import StuffItem from "@/components/stuffItem/StuffItem";
import quotes from "@/static/types/Quotes";
import Link from "@/components/link/Link";
import { useState, useEffect } from "react";
import StaticTableOfContents from "@/components/staticTableOfContents/StaticTableOfContents";
import CommandMenu from "@/components/commandMenu/CommandMenu";

export default function Home() {
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  return (
    <Page
      title="Home"
      description="Hey, I'm Charlie Meyer. Thanks for stopping by."
    >
      <CommandMenu />
      <StaticTableOfContents />
      <article className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.title}>Hey, I&apos;m Charlie Meyer.</h1>
          <p className={styles.text}>
            <em>{randomQuote}</em>
          </p>
        </section>
        <section className={styles.section}>
          <h1 className={styles.title}>Currently</h1>
          <p className={styles.text}>
            I&apos;m a third year @ UVA studying CS and entrepreneurship.
            I&apos;m a 2025{" "}
            <Link href="https://www.neo.com/scholars">Neo Scholar</Link>, Model
            UN-er, dedicated weightlifter, and decent snowboarder. Previously,
            I&apos;ve worked at{" "}
            <Link href="https://www.principal.com">Principal Financial</Link>,{" "}
            <Link href="https://www.scenthound.com">Scenthound</Link>, and{" "}
            <Link href="https://www.vercel.com">Vercel</Link>. I also hack on
            things like{" "}
            <Link href="https://hufflo.com" target="_blank">
              Hufflo
            </Link>{" "}
            and{" "}
            <Link href="https://simpletext.dev" target="_blank">
              simpletext
            </Link>
            .
          </p>
          <p className={styles.text}>
            I work on inference research with{" "}
            <Link href="https://weizhepei.com/">Zhepei Wei</Link> and am
            independently working on AI for math research. How can we get LLMs
            to reason in format math (Lean)?
          </p>
        </section>
        <section className={styles.section}>
          <h1 className={styles.title}>Future</h1>
          <p className={styles.text}>
            I care about hard problems. There&apos;s a couple things I think
            worth working on - artificial superintelligence, AI safety, the
            energy crisis (nuclear fusion), quantum, BCI, the global climate
            crisis, and making governments better. The intersection of what
            I&apos;m good at, what I care about, and what&apos;s important in
            the world is AGI and AI safety. So I&apos;m working on that, and
            subproblems of it: inference and math reasoning.
          </p>
          <p className={styles.text}>
            I also am interested in the infrastructure that supports AI
            research. It&apos;s incredibly hard to do training at scale and
            manage all the buzzwords - tensor parallelism, pipeline parallelism,
            NCCL, accelerators, kubernetes, all this stuff. Training and serving
            models at scale should be easier.
          </p>
          <p className={styles.text}>
            Aside from running the SF Marathon again, I need to run in the NYC
            Marathon. I&apos;d want to get to the{" "}
            <Link href="https://www.cphopen.com/" newWindow>
              Copenhagen Open
            </Link>{" "}
            or{" "}
            <Link href="https://dimemtl.com/blogs/videos" newWindow>
              Dime.
            </Link>
          </p>
        </section>
        <section className={styles.section}>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.text}>
            Reach out to me. I love to talk to people who are deeply passionate
            about something.{" "}
          </p>
          <div className={styles.contactListWrapper}>
            <div
              className={styles.contactListItem}
              onClick={() => {
                window.open("https://x.com/charlie_meyer_", "_blank");
              }}
            >
              <Arrow angle={0} height={1} className={styles.animatedArrow} />
              <Link className={styles.contactListText}>Twitter/X</Link>
            </div>
            <div
              className={styles.contactListItem}
              onClick={() => {
                window.open(
                  "https://linkedin.com/in/charlie-meyer-loves-you",
                  "_blank"
                );
              }}
            >
              <Arrow angle={0} height={1} className={styles.animatedArrow} />
              <Link className={styles.contactListText}>LinkedIn</Link>
            </div>
            <div
              className={styles.contactListItem}
              onClick={() => {
                window.open("mailto:charlie@charliemeyer.xyz", "_blank");
              }}
            >
              <Arrow angle={0} height={1} className={styles.animatedArrow} />
              <Link className={styles.contactListText}>Email</Link>
            </div>
          </div>
        </section>
      </article>
    </Page>
  );
}
