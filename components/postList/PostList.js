import styles from "./PostList.module.scss";
import PostListItem from "@/components/postListItem/PostListItem";
import classNames from "classnames";

export default function PostList({ posts, ...props }) {
  let currentYear = null;
  const yearContainers = [];

  posts.forEach((post) => {
    const year = new Date(post.date).getFullYear();

    if (year !== currentYear) {
      const yearPosts = posts.filter(
        (p) => new Date(p.date).getFullYear() === year
      );
      const postItems = yearPosts.map((yearPost) => (
        <div
          className={classNames(styles.postListItemContainer)}
          key={yearPost.slug}
        >
          <PostListItem
            key={yearPost.slug}
            date={yearPost.date}
            title={yearPost.title}
            slug={yearPost.slug}
          />
        </div>
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
      <div className={styles.yearContainers}>{yearContainers}</div>
    </div>
  );
}
