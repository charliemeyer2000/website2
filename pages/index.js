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
                        I'm a second year @ UVA majoring in CS. I'm into weightlifting,
                        skateboarding, embroidery, guitar, any type of outdoor activity and
                        coding. Right now, started training for the San Francisco marathon
                        in 2024 while also hoping to get into the 2-3-4 club. I'm also a big
                        Model UN nerd, working as the media manager for VICS XXVII (and the
                        former treasurer!) Thanks for stopping by, and take a look at some
                        of my <Link href="/posts">posts</Link> if you want.
                    </p>
                    <p className={styles.text}>
                        In terms of technically what I'm up to, I'm working as a contracted
                        Software Engineer at{" "}
                        <Link href="https://joinforge.co" newWindow>
                            Forge
                        </Link>{" "}
                        and will be working at{" "}
                        <Link href="https://principal.com" newWindow>
                            Principal
                        </Link>{" "}
                        this summer. Also, as per, I'm still working with Ryland on HymnAi,
                        working to make cool new products that we're passionate about.
                        Specifically, we're starting work on TextBuddy, looking at working
                        with either SwiftUI or React Native to build a product we think
                        would be cool.
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
                                    href="https://www.hymnai.net"
                                    angle={-45}
                                    newWindow={true}
                                    description="A creative shift on the HymnAI brand."
                                />
                                <StuffItem
                                    title="Iro-Vics"
                                    href="https://www.iro-vics.org"
                                    angle={-45}
                                    newWindow={true}
                                    description="Go and register for VICS XXVIII."
                                />
                            </div>
                        </div>
                        <div className={styles.stuffItem}>
                            <p className={styles.stuffItemTitle}>Classes, Certifications</p>
                            <div className={styles.stuffItemContent}>
                                <StuffItem
                                    title="Solutions Architect"
                                    href="https://aws.amazon.com/certification/certified-solutions-architect-associate/?trk=1d3789b7-cdfb-4b92-a125-75424f21eaaf&sc_channel=ps"
                                    angle={-45}
                                    newWindow={true}
                                    description="On my way to being a Solutions Architect."
                                />
                                <StuffItem
                                    title="Forge Launch 2023"
                                    href="https://www.joinforge.co/launch"
                                    angle={-45}
                                    newWindow={true}
                                    description="Completed Forge Launch program bootcamp."
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
                                    newWindow={true}
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
                        My mid-term goal is to live in a van/small apartment and be
                        relatively mobile while working remotely/hybrid as a coder. I think
                        it would be incredibly comical to be working for{" "}
                        <em>insert big tech company</em> while living simply and enjoying
                        hobbies - skating, surfing, guitar, etc.
                    </p>
                    <p className={styles.text}>
                        Technically speaking, I want to be a full-stack developer,
                        especially doing so with a focus on AWS Cloud computing and using
                        AWS to do things better. There's just so many options of
                        technologies to use - so that's why I'll be doing various
                        certification courses to get a better understanding of the cloud.
                        But realistically, certification courses don't mean too much (a lot
                        of show) - anyone can just study for a test. So I'll be working on
                        projects using AWS to get a better understanding of the cloud in a
                        more practical sense. One day AWS will release the Elastic Service
                        Service, AWS ESS, the service of services.
                    </p>
                    <p className={styles.text}>
                        Aside from the SF marathon, I need to also run in the NYC TCS
                        Marathon. I'd want to get to the{" "}
                        <Link href="https://www.cphopen.com/" newWindow>
                            Copenhagen Open
                        </Link>{" "}
                        or{" "}
                        <Link href="https://dimemtl.com/blogs/videos" newWindow>
                            Dime
                        </Link>{" "}
                        but also participate in local skate events and support the skaters I
                        love at events (keeping an eye on QuarterSnacks and Pocket Skate
                        Mag).
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
