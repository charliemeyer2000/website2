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
          <h1 className={styles.title}>Hey, I'm Charlie Meyer.</h1>
          <p className={styles.text}>
            <em>{randomQuote}</em>
          </p>
        </section>
        <section className={styles.section}>
          <h1 className={styles.title}>Currently</h1>
          <p className={styles.text}>
            {/* I'm a third year @ UVA studying CS and entrepreneurship. I'm into
              weightlifting, snowboarding, guitar, any type of outdoor activity
              and building cool stuff. I just became a{" "}
              <Link href="https://neo.com">Neo Scholar</Link> and will be taking
              off from school (January → May) to build in SF with other
              Scholars. Super excited to get to the Bay, but will definitely
              miss Grounds! Take a look at some of my{" "}
              <Link href="/posts">posts</Link> or leave a note in my{" "}
              <Link href="/guestbook">guestbook</Link>. */}
            I'm a third year @ UVA studying CS and entrepreneurship. I'm
            currently in San Francisco with other{" "}
            <Link href="https://www.neo.com/scholars"> Neo Scholars</Link>{" "}
            exploring what I care about. Previously, I've worked at{" "}
            <Link href="https://www.principal.com">Principal Financial</Link>,{" "}
            <Link href="https://www.scenthound.com">Scenthound</Link>, and (soon
            at) <Link href="https://www.vercel.com">Vercel</Link>. I'm a 2025
            Neo Scholar, Model UN-er, dedicated weightlifter, and decent
            snowboarder.
          </p>
          <p className={styles.text}>
            I've built multiple SaaS products, but throughout the my time away
            from UVA, I've been reading and teaching myself RL and ML concepts.
            Buzzwords include AlphaGo/AlphaZero, LM red-teaming, automated
            theorem proving, and Ray.
          </p>
          <p className={styles.text} style={{ fontStyle: "italic" }}>
            Reach out to me! Talk to me about what you care about.
          </p>
        </section>
        <section className={styles.section}>
          <h1 className={styles.title}>Stuff</h1>
          <div className={styles.stuffWrapper}>
            <div className={styles.stuffItem}>
              <p className={styles.stuffItemTitle}>Past products:</p>
              <div className={styles.stuffItemContent}>
                <StuffItem
                  title="Hufflo"
                  href="https://hufflo.com"
                  angle={-45}
                  newWindow={true}
                  description="Put your Etsy marketing on autopilot."
                />
                <StuffItem
                  title="tinytext"
                  href="https://tinytext.me"
                  angle={-45}
                  newWindow={true}
                  description="BlueSky PDS hosting on your domain."
                />
                <StuffItem
                  title="simpletext"
                  href="https://simpletext.dev"
                  angle={-45}
                  newWindow={true}
                  description="Stupidly simple sms & otp service."
                />
                {/* <StuffItem
                    title="DoorShop"
                    href="https://apps.apple.com/us/app/doorshop/id6496682406"
                    angle={-45}
                    newWindow={true}
                    description="Download DoorShop on the App Store."
                  /> */}
              </div>
            </div>
            <div className={styles.stuffItem}>
              <p className={styles.stuffItemTitle}>Certifications n' Stuff</p>
              <div className={styles.stuffItemContent}>
                <StuffItem
                  title="Neo Scholar"
                  href="https://neo.com"
                  angle={-45}
                  newWindow={true}
                  description="Just became a Neo Scholar!"
                />
                <StuffItem
                  title="AWS Cloud Practitioner"
                  href="https://www.credly.com/badges/4d6f0528-03d5-4e23-8ee9-92a1f288ff7b/public_url"
                  angle={-45}
                  newWindow={true}
                  description="Check out my certificate for CLF-C02."
                />
                <StuffItem
                  title="AWS Solutions Architect"
                  href="https://www.credly.com/badges/f70da3a7-8b88-4fe4-8e78-96ada999bba2/public_url"
                  angle={-45}
                  newWindow={true}
                  description="Check out my certification for SAA-C03."
                />
                <StuffItem
                  title="Forge Launch 2023"
                  href="https://www.joinforge.co/launch"
                  angle={-45}
                  newWindow={true}
                  description="Completed Forge's 150hr bootcamp → internship"
                />
              </div>
            </div>
            <div className={styles.stuffItem}>
              <p className={styles.stuffItemTitle}>Other</p>
              <div className={styles.stuffItemContent}>
                <StuffItem
                  title="Posts"
                  href="/posts"
                  newWindow={false}
                  angle={-45}
                  description="Check out stuff I've written."
                />

                <StuffItem
                  title="Guestbook"
                  newWindow={false}
                  href="/guestbook"
                  angle={-45}
                  description="Add your name to the guestbook."
                />
                <StuffItem
                  title="Resume"
                  href="static/images/resume.pdf"
                  angle={-45}
                  newWindow={true}
                  description="Take a look at my general resume."
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <h1 className={styles.title}>Future</h1>
          <p className={styles.text}>
            I care about hard problems. There's a couple things I think worth
            working on - artificial superintelligence, AI safety, the energy
            crisis (nuclear fusion), quantum, BCI, the global climate crisis,
            and making governments better. The intersection of what I'm good at,
            what I care about, and what's important in the world is AGI and AI
            safety. So I'm working on that.
          </p>
          <p className={styles.text}>
            I will run my own company. Currently exploring ideas in ML/RL. Also
            think there's a lot of interesting problems in facilitating{" "}
            <Link
              href="https://www.cs.virginia.edu/~robins/YouAndYourResearch.html"
              newWindow
            >
              good research
            </Link>{" "}
            especially with removing the engineering overhead to run large-scale
            experiments. It shouldn't be this engineering intensive to run
            experiments. Also, how can we formally verify code?
          </p>
          <p className={styles.text}>
            Aside from running the SF Marathon again, I need to run in the NYC
            Marathon. I'd want to get to the{" "}
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
                  "https://bsky.app/profile/charliemeyer.xyz",
                  "_blank",
                );
              }}
            >
              <Arrow angle={0} height={1} className={styles.animatedArrow} />
              <Link className={styles.contactListText}>Bluesky</Link>
            </div>
            <div
              className={styles.contactListItem}
              onClick={() => {
                window.open(
                  "https://linkedin.com/in/charlie-meyer-loves-you",
                  "_blank",
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
