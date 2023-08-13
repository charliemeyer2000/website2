import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children, ...props }) {
  return (
    <motion.div
      key={props.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
