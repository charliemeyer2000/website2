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
              I'm a third year @ UVA majoring in CS. I'm into weightlifting,
              snowboarding (unabashedly an Epic pass holder), guitar, any type
              of outdoor activity and building cool stuff. I just finished my
              first marathon in SF (🎉🎉) while also hoping to get into the
              2-3-4 club. I'm a big Model UN nerd, currently the
              Secretary-General of VICS XXIX and am chairing VAMUN XLIV. Thanks
              for stopping by, and take a look at some of my{" "}
              <Link href="/posts">posts</Link> or leave a note in my{" "}
              <Link href="/guestbook">guestbook</Link>.
            </p>
            <p className={styles.text}>
              In terms of technically what I'm up to, I finished my role working
              on{" "}
              <Link href="https://principal.com" newWindow>
                Principal's
              </Link>{" "}
              asset management team this summer building cloud infrastructure as
              code with AWS. Over the summer I just launched{" "}
              <Link href="https://simpletext.dev" newWindow>
                simpletext
              </Link>{" "}
              - a stupidly simple sms & otp service. I'm excited about building
              this service further and building new services within the
              developer tooling space as a whole! I'm also starting to build
              EasyList - simplifying the UX from physical product to online
              store for small businesses. I'm absolutely loving working with my
              entrepreneurial peers with Founders@UVA - we're now hosting a week
              of events for the launch of UVA's entrepreneurship house (The
              Foundry)!
            </p>
            <p className={styles.text}>
              {"\u002A"}
              {"\u002A"}PS - I'm cooking on an idea about the Fediverse, if
              you're interested, LMK!{"\u002A"}
              {"\u002A"}
            </p>
          </section>
          <section className={styles.section}>
            <h1 className={styles.title}>Stuff</h1>
            <div className={styles.stuffWrapper}>
              <div className={styles.stuffItem}>
                <p className={styles.stuffItemTitle}>Projects</p>
                <div className={styles.stuffItemContent}>
                  <StuffItem
                    title="simpletext"
                    href="https://simpletext.dev"
                    angle={-45}
                    newWindow={true}
                    description="Stupidly simple sms & otp service."
                  />
                  <StuffItem
                    title="DocuDiver"
                    href="https://www.docudiver.com"
                    angle={-45}
                    newWindow={true}
                    description="Modern document management & intelligence."
                  />
                  <StuffItem
                    title="DoorShop"
                    href="https://apps.apple.com/us/app/doorshop/id6496682406"
                    angle={-45}
                    newWindow={true}
                    description="Download DoorShop on the App Store."
                  />
                </div>
              </div>
              <div className={styles.stuffItem}>
                <p className={styles.stuffItemTitle}>Certifications n' Stuff</p>
                <div className={styles.stuffItemContent}>
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
            {/* <p className={styles.text}>
              Technically speaking, I want to be a full-stack developer,
              especially doing so with a focus on AWS Cloud computing and using
              AWS to do things better. I'm now an AWS Solutions Architect
              Associate, but I specifically enjoy working on projects using AWS
              to get a better understanding of the cloud in a more practical
              sense. One day AWS will release the Elastic Service Service, AWS
              ES2, the service to end all services.
            </p> */}
            <p className={styles.text}>
              Aside from running again in the 2025 SF marathon, I need to run in
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
                  window.open("mailto:charlie@charliemeyer.xyz", "_blank");
                }}
              >
                <Arrow angle={0} height={1} className={styles.animatedArrow} />
                <Link className={styles.contactListText}>
                  charlie@charliemeyer.xyz
                </Link>
              </div>
              <div
                className={styles.contactListItem}
                onClick={() => {
                  window.open("mailto:abs6bd@virginia.edu", "_blank");
                }}
              >
                <Arrow angle={0} height={1} className={styles.animatedArrow} />
                <Link className={styles.contactListText}>
                  abs6bd@virginia.edu
                </Link>
              </div>
              <div
                className={styles.contactListItem}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/charlie-meyer-loves-you/",
                    "_blank"
                  );
                }}
              >
                <Arrow angle={0} height={1} className={styles.animatedArrow} />
                <Link className={styles.contactListText}>
                  charlie-meyer-loves-you on Linkedin
                </Link>
              </div>
            </div>
          </section>
        </article>
      </Page>
    );
}
