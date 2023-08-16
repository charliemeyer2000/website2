// type that contains all the components that are passed to md/mdx files.
import styles from "./Components.module.scss";
import Link from "@/components/link/Link";
import BackTicks from "@/components/backTicks/BackTicks";
import YouTubeVideo from "@/components/youTubeVideo/YouTubeVideo";
const components = {
  h1: (props) => <h1 className={styles.h1} {...props} />,
  h2: (props) => <h2 className={styles.h2} {...props} />,
  p: (props) => <p className={styles.p} {...props} />,
  a: (props) => <Link {...props} />,
  BackTicks,
  YouTubeVideo: (props) => <YouTubeVideo {...props} />,
};

export default components;
