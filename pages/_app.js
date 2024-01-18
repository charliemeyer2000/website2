import '@/styles/pojoaque.scss';
import "@/styles/globals.scss";
import '@/styles/nprogress.scss';
import nProgress from "nprogress";
import debounce from "lodash.debounce";
import Router from "next/router";
import { ThemeProvider } from "next-themes";
import { SoundProvider } from "@/components/soundToggle/SoundContext";
import { PageTransitionProvider } from "@/components/pageTransition/PageTransitionContext";
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
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

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    // necessary for page transitions to work for slugs
    const router = useRouter();
    const pageKey = router.asPath


    return (
        <SessionProvider session={session}>
            <AnimatePresence
                initial={false}
                mode="popLayout"
                onExitComplete={onExitComplete}
            >
                <PageTransitionProvider>
                    <SoundProvider>
                        <ThemeProvider defaultTheme="dark">
                            <Component key={pageKey} {...pageProps} />
                        </ThemeProvider>
                    </SoundProvider>
                </PageTransitionProvider>
            </AnimatePresence>
        </SessionProvider>
    );
}
