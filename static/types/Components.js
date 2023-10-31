// type that contains all the components that are passed to md/mdx files.
import styles from "./Components.module.scss";
import Link from "@/components/link/Link";
import YouTubeVideo from "@/components/youTubeVideo/YouTubeVideo";
import XKCD from "@/components/xkcd/XKCD";
const components = {
  h1: (props) => <h1 className={styles.h1} {...props} />,
  h2: (props) => <h2 className={styles.h2} {...props} />,
  p: (props) => <p className={styles.p} {...props} />,
  a: (props) => <Link {...props} />,
  li: (props) => <li className={styles.li} {...props} />,
  YouTubeVideo: (props) => <YouTubeVideo {...props} />,
  // make the images centered
  img: (props) => <img className={styles.img} {...props} />,
  code: (props) => <code className={styles.code} {...props} />,
  XKCD: (props) => <XKCD {...props} />,
};

export default components;
