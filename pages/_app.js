import '@/styles/pojoaque.scss';
import "@/styles/globals.scss";
import nProgress from "nprogress";
import debounce from "lodash.debounce";
import Router from "next/router";
import { ThemeProvider } from "next-themes";
import { SoundProvider } from "@/components/soundToggle/SoundContext";
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';

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

const onExitComplete = () => {
	window.scrollTo({ top: 0 })
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pageKey = router.asPath;

  return (
    <AnimatePresence initial={false} mode="popLayout" onExitComplete={onExitComplete}>
      <SoundProvider>
        <ThemeProvider defaultTheme="dark">
          <Component key={pageKey} {...pageProps} />
        </ThemeProvider>
      </SoundProvider>
    </AnimatePresence>
  );
}
