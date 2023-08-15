import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import styles from "./StaticTableOfContents.module.scss";
import useProgress from "@/utils/hooks/useProgress";
import MetroTrackStops from "@/static/types/MetroTrackStops";
import Image from "next/image";
import { useScroll, motion } from "framer-motion";
import colors from "@/static/types/Colors";

export default function StaticTableOfContents({ ...props }) {
  const { proportionalProgress, absoluteProgress } = useProgress();
  const { theme: activeTheme, systemTheme, setTheme } = useTheme();

  const isDarkMode =
    activeTheme === "dark" ||
    activeTheme === undefined ||
    systemTheme === "light";

  const [ids, setIds] = useState([]);
  const [railStartingPosition, setRailStartingPosition] = useState(0);
  const [railHeight, setRailHeight] = useState(0);

  const [railColor, setRailColor] = useState(null);
  const ENDING_OFFSET = 50;

  useEffect(() => {
    const titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    setRailStartingPosition(titles[0].getBoundingClientRect().top);
    setRailHeight(
      titles[titles.length - 1].getBoundingClientRect().bottom -
        titles[0].getBoundingClientRect().top
    );    

    setRailColor(colors[Math.floor(Math.random() * colors.length)]);

    

    const ids = Array.prototype.slice.call(titles).map((title) => {
      const rect = title.getBoundingClientRect();
      return {
        className: title.className,
        title: title.innerText,
        position: rect.top,
        imageSrc: isDarkMode
          ? MetroTrackStops.darkMode[
              Math.floor(Math.random() * MetroTrackStops.darkMode.length)
            ]
          : MetroTrackStops.lightMode[
              Math.floor(Math.random() * MetroTrackStops.darkMode.length)
            ],
      };
    });
    setIds(ids);
  }, [isDarkMode]);

  return (
    <div className={styles.root}>
      <div
        className={styles.rail}
        style={{
          "--starting-position": `${railStartingPosition - ENDING_OFFSET}px`, // offset to have 50px on each end
          "--rail-height": `${railHeight + ENDING_OFFSET * 2}px`, // to have a little extra space at the bottom and top
          "--ending-offset": `${ENDING_OFFSET}`, // offset to have 50px on each end
          "--color": railColor,
        }}
      ></div>
      <div className={styles.stopsWrapper}>
        {ids.map((item, index) => {
          return (
            <Image
              src={item.imageSrc}
              key={index}
              alt="square"
              className={styles.stop}
              style={{
                "--position": `${item.position + (index !== 0 ? 10 : 0)}px`, // weird visual bug
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
