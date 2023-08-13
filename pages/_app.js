import '@/styles/pojoaque.scss';
import "@/styles/globals.scss";
import nProgress from "nprogress";
import debounce from "lodash.debounce";
import Router from "next/router";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/pageTransition/PageTransition";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import useSound from "use-sound";

const start = debounce(nProgress.start, 200);
Router.events.on("routeChangeStart", start);
Router.events.on("routeChangeComplete", () => {
  start.cancel();
  nProgress.done();
  window.scrollTo(0, 0);
});
Router.events.on("routeChangeError", () => {
  start.cancel();
  nProgress.done();
});

export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
