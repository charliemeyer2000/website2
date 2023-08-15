import classNames from "classnames";
import CustomHead from "../customHead/CustomHead";
import styles from './Page.module.scss'
import Nav from "../nav/Nav";
import useNavTitles from "@/utils/hooks/useNavTitles";
import PageTransition from "../pageTransition/PageTransition";
import { usePageTransitionContext } from "../pageTransition/PageTransitionContext";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";

export default function Page(props) {
  const { title, description, date, children } = props;
  const navArrowObject = useNavTitles();
  const { pageTransition, newPageTransition } = usePageTransitionContext();
  // handling not mounted errors (hydration errors). This is a hacky solution, but it works for now.
  /* see docs here: 
  https://nextjs.org/docs/messages/react-hydration-error
  */
  const [isMounted, setIsMounted] = useState(false);

  useEffect((() => {
    setIsMounted(true);
    newPageTransition(navArrowObject.pageTransition); // put this inside!! that causes bad routing 
  }), [])

  if (!isMounted) {
    return null;
  }


  return (
    <PageTransition>
      <div className={classNames(styles.container)}>
        <CustomHead
          title={title ? `${title} | Charlie Meyer` : "Charlie Meyer"}
          description={description}
          date={date}
        />
        <Nav navArrowObject={navArrowObject} />
        <main className={classNames(styles.main)}>{children}</main>
        <Footer />
      </div>
    </PageTransition>
  );
}
