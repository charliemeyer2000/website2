import React from "react";
import Page from "@/components/page/Page";
import { Howl, Howler } from "howler";
import { useTheme } from "next-themes";
import NavArrow from "@/components/navArrow/NavArrow";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <Page title="Home" description="Hey, I'm Charlie Meyer. Thanks for stopping by.">
      <h1>Charlie Meyer</h1>
    </Page>
  );
}
