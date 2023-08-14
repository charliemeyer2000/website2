import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PageTransition.module.scss";

export default function PageTransition({ children, ...props }) {

  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };
  const transition = { duration: 0.6, ease: "easeInOut" };
  // don't show the scroll bar during page transitions

  return (
    <div className={styles.root}>
      <motion.div
        key={props.key}
        initial={onTheRight}
        animate={inTheCenter}
        exit={onTheLeft}
        transition={transition}
        className={styles.root}
      >
        {children}
      </motion.div>
    </div>
  );
}
