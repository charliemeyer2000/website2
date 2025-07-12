import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PageTransition.module.scss";
import { usePageTransitionContext } from "./PageTransitionContext";

export default function PageTransition({ children, ...props }) {
  const { pageTransition } = usePageTransitionContext();

  // Detect Safari and disable animations to prevent flicker
  const isSafari =
    typeof window !== "undefined" &&
    /Safari/.test(navigator.userAgent) &&
    !/Chrome/.test(navigator.userAgent);

  // For Safari, use no animation - just render the content directly
  if (isSafari) {
    return (
      <div className={styles.root}>
        <div className={styles.root}>{children}</div>
      </div>
    );
  }

  // For all other browsers, use the normal animation
  return (
    <div className={styles.root}>
      <motion.div
        key={props.key}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
        className={styles.root}
      >
        {children}
      </motion.div>
    </div>
  );
}
