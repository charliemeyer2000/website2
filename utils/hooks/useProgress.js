import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

// this runs on scroll and could slow down website
const useProgress = () => {
  // clean hook that uses framer-motion's scroll and motionValueEvent to get scroll progress from 0 to 1 (up to 2 decimal places)
  const { scrollYProgress, scrollY } = useScroll();
  const [proportionalProgress, setProportionalProgress] = useState(0);
  const [absoluteProgress, setAbsoluteProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProportionalProgress(parseFloat(latest.toFixed(2))); // round to 2 decimal places
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    setAbsoluteProgress(parseFloat(latest.toFixed(2))); // round to 2 decimal places
  });
  return {proportionalProgress, absoluteProgress};
};

export default useProgress;
