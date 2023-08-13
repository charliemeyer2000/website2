import React from "react";
import Page from "@/components/page/Page";
import { Howl, Howler } from "howler";
import { useTheme } from "next-themes";
import NavArrow from "@/components/navArrow/NavArrow";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <Page>
      <h1>Charlie Meyer</h1>
    </Page>
  );
}
