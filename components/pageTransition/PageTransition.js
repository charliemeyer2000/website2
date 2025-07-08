import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PageTransition.module.scss";
import { usePageTransitionContext } from "./PageTransitionContext";

export default function PageTransition({ children, ...props }) {
  const { pageTransition } = usePageTransitionContext();

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
