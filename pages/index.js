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
              I'm a third year @ UVA studying CS. I'm into weightlifting,
              snowboarding (unabashedly an Epic pass holder), guitar, any type
              of outdoor activity and building cool stuff. I just became a{" "}
              <Link href="https://neo.com">Neo Scholar</Link> and will be taking
              off from school (January → May) to build in SF with other
              Scholars, and I'll also be in SF over the summer, as well. Super
              excited to get to the Bay, but will definitely miss Grounds!
              Thanks for stopping by, and take a look at some of my{" "}
              <Link href="/posts">posts</Link> or leave a note in my{" "}
              <Link href="/guestbook">guestbook</Link>.
            </p>
            <p className={styles.text}>
              In terms of technically what I'm up to, I'm scaling{" "}
              <Link href="https://hufflo.com">Hufflo</Link> with my friend{" "}
              <Link
                href="https://www.linkedin.com/in/rylandbirchmeier/"
                newWindow
              >
                Ryland,
              </Link>{" "}
              and I'm always hacking on one-off ideas like{" "}
              <Link href="https://heyswing.com">Swing</Link>. However, I'm open
              to building almost anything - spaces I'm interested in building in
              include tech that optimizes (or replaces) email, music production
              tech, EdTech, closed-loop social networks, and any LLM-powered or
              agentic-powered tools that optimize tasks. I'm also going to try
              my hand at "growth hacking," sharing my progress on{" "}
              <Link href="https://x.com/charlie_meyer_">Twitter</Link>{" "}
              throughout the semester off.
            </p>
            <p className={styles.text} style={{ fontStyle: "italic" }}>
              I'm always looking to build new things. Please, <b>please</b>{" "}
              <Link href="https://calendly.com/abs6bd-virginia/1-1-with-charlie" newWindow>
                reach out
              </Link>{" "}
              to me if you're interested in building something together!
            </p>
          </section>
          <section className={styles.section}>
            <h1 className={styles.title}>Stuff</h1>
            <div className={styles.stuffWrapper}>
              <div className={styles.stuffItem}>
                <p className={styles.stuffItemTitle}>Hacking on:</p>
                <div className={styles.stuffItemContent}>
                  <StuffItem
                    title="Hufflo"
                    href="https://hufflo.com"
                    angle={-45}
                    newWindow={true}
                    description="Put your Etsy marketing on autopilot."
                  />
                  <StuffItem
                    title="tinypds"
                    href="https://tinypds.com"
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
              My goal is to live out in SF - it's just hours from some of the
              best hiking, skiing, and surfing in the US, and also a hub for
              entrepreneurship. I want to work on technically challenging
              projects while living simply and enjoying hobbies - skating,
              snowboarding, guitar, and surfing.
            </p>
            <p className={styles.text}>
              I want to build my own company, tackling problems that will
              improve people's lives (first with software, then with hardware).
              I'm interested in frontend/fullstack development, but also love
              building distributed & cloud systems (AWS rocks). I eventually
              want to build hardware, especially interested in non-invasive
              methods to use tech to remove mundane tasks from people's lives.
            </p>
            <p className={styles.text}>
              Aside from running the SF Marathon again, I need to run in
              the NYC Marathon. Moreover, I'd want to get to the{" "}
              <Link href="https://www.cphopen.com/" newWindow>
                Copenhagen Open
              </Link>{" "}
              or{" "}
              <Link href="https://dimemtl.com/blogs/videos" newWindow>
                Dime
              </Link>{" "}
              while participating in local skate events to support the skaters I
              love (keeping an eye on Thrasher and Pocket Skate Mag).
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
                    "_blank"
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
