import styles from "./PostList.module.scss";
import PostListItem from "@/components/postListItem/PostListItem";
import classNames from "classnames";
import { motion } from "framer-motion";
import Topics, { TOPIC_ORDER } from "@/static/types/Topics";

export default function PostList({ posts, ...props }) {
  // Detect Safari and disable animations to prevent flicker
  const isSafari =
    typeof window !== "undefined" &&
    /Safari/.test(navigator.userAgent) &&
    !/Chrome/.test(navigator.userAgent);

  const topicContainers = [];
  const topicMap = {};

  Object.values(Topics).forEach((topic) => {
    topicMap[topic] = [];
  });

  posts.forEach((post) => {
    if (!post.topic || post.topic === "Other") {
      topicMap["Other"].push(post);
    } else {
      const matchingTopic = Object.values(Topics).find(
        (topic) => topic === post.topic
      );
      if (matchingTopic) {
        topicMap[matchingTopic].push(post);
      } else {
        // Put into "other" if not matching any topic.
        topicMap["Other"].push(post);
      }
    }
  });

  TOPIC_ORDER.forEach((topic) => {
    const topicPosts = topicMap[topic];
    if (topicPosts.length === 0) return; // Skip empty topics.

    const sortedPosts = topicPosts.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    const postItems = sortedPosts.map((post, index) => {
      // For Safari, use regular div without animation
      if (isSafari) {
        return (
          <div
            className={classNames(styles.postListItemContainer)}
            key={post.slug}
          >
            <PostListItem
              key={post.slug}
              date={post.date}
              title={post.title}
              slug={post.slug}
            />
          </div>
        );
      }

      // For other browsers, use animated motion.div
      return (
        <motion.div
          className={classNames(styles.postListItemContainer)}
          key={post.slug}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: topicContainers.length * 0.1 + index * 0.1,
          }}
        >
          <PostListItem
            key={post.slug}
            date={post.date}
            title={post.title}
            slug={post.slug}
          />
        </motion.div>
      );
    });

    topicContainers.push(
      <div key={topic} className={styles.topicContainer}>
        <p className={styles.topic}>{topic}</p>
        <div className={styles.postList}>{postItems}</div>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All articles</h1>
      {isSafari ? (
        // For Safari, use regular div without animation
        <div className={styles.topicContainers}>{topicContainers}</div>
      ) : (
        // For other browsers, use animated motion.div
        <motion.div
          className={styles.topicContainers}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {topicContainers}
        </motion.div>
      )}
    </div>
  );
}
