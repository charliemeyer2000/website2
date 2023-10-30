import styles from "./PostList.module.scss";
import PostListItem from "@/components/postListItem/PostListItem";
import classNames from "classnames";
import { motion } from "framer-motion";

export default function PostList({ posts, ...props }) {
  let currentYear = null;
  const yearContainers = [];

  posts.forEach((post) => {
    const year = new Date(post.date).getFullYear();

    if (year !== currentYear) {
      const yearPosts = posts.filter(
        (p) => new Date(p.date).getFullYear() === year
      );
      const postItems = yearPosts.map((yearPost, index) => (
        <motion.div
          className={classNames(styles.postListItemContainer)}
          key={yearPost.slug}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: yearContainers.length * 0.1 + index * 0.1,
          }}
        >
          <PostListItem
            key={yearPost.slug}
            date={yearPost.date}
            title={yearPost.title}
            slug={yearPost.slug}
          />
        </motion.div>
      ));

      yearContainers.push(
        <div key={year} className={styles.yearContainer}>
          <p className={styles.year}>{year}</p>
          <div className={styles.postList}>{postItems}</div>
        </div>
      );
      currentYear = year;
    }
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All articles</h1>
      <motion.div
        className={styles.yearContainers}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {yearContainers}
      </motion.div>
    </div>
  );
}
