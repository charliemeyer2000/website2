import styles from "./PostTableOfContents.module.scss";
import useProgress from "@/utils/hooks/useProgress";
import { useState, useEffect } from "react";
import colors from "@/static/types/Colors";
import MetroTrackStops from "@/static/types/MetroTrackStops";
import { useTheme } from "next-themes";
import Image from "next/image";
import useSound from "use-sound";
import { useSoundContext } from "../soundToggle/SoundContext";

export default function PostTableOfContents() {
  const { theme: activeTheme, systemTheme, setTheme } = useTheme();
  const { proportionalProgress, absoluteProgress } = useProgress();
  const isDarkMode =
    activeTheme === "dark" ||
    (activeTheme === "system" && systemTheme === "dark");
  const [ids, setIds] = useState([]);
  const [railColor, setRailColor] = useState(colors[0]);
  const { soundOn } = useSoundContext();
  const shouldShowTableOfContents =
    proportionalProgress > 0.07 && proportionalProgress < 0.9;
  const [play] = useSound("static/audio/mouse-over.wav", {
    volume: soundOn ? 1 : 0,
    forceSoundEnabled: true,
  });

  // initial getting of all titles
  useEffect(() => {
    const titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
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
              Math.floor(Math.random() * MetroTrackStops.lightMode.length)
            ],
      };
    });
    setIds(ids);
    setRailColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [isDarkMode]);

  return (
    <div
      className={styles.root}
      style={{
        opacity: shouldShowTableOfContents ? 1 : 0, // Set opacity based on visibility
        transition: "opacity 0.5s ease-in-out", // Smooth transition effect
        pointerEvents: shouldShowTableOfContents ? "auto" : "none", // Set pointer-events based on visibility
      }}
    >
      <>
        <div
          className={styles.rail}
          style={{
            "--rail-color": railColor,
          }}
        />
        {ids.map((header, index) => {
          return (
            <div
              className={styles.stopWrapper}
              key={index}
              onMouseEnter={play}
              onClick={() => {
                window.scrollTo({
                  top: header.position,
                  behavior: "smooth",
                });
              }}
            >
              <Image
                src={header.imageSrc}
                alt="metro track stop"
                className={styles.stopImage}
              />
              <p className={styles.stopTitle}>{header.title}</p>
            </div>
          );
        })}
      </>
    </div>
  );
}
