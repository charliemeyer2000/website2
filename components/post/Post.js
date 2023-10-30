import Head from 'next/head';
import styles from './Post.module.scss';
import Page from "../page/Page";
import { MDXRemote } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";
import components from "@/static/types/Components";
import { useTheme } from "next-themes";
import PreviousNext from "../previousNext/PreviousNext";
import PostTableOfContents from '../postTableOfContents/PostTableOfContents';
import useViews from "@/utils/hooks/useViews";
import { useEffect } from "react";

export default function Post(props) {
  const { title, date, mdxSource, previous, next, slug, description } = props;

  const { numViews, updateItem } = useViews(slug);

  useEffect(() => {
    updateItem(slug);
  }, []);

  return (
    <Page title={title} description={title} date={date}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>{title}</h1>
        {description && (
          <p className={styles.description}>{description}</p>
        )}{" "}
        <p className={styles.date}>
          {date} | {new Intl.NumberFormat("en-US").format(numViews)}{" "}
          {numViews > 1 ? "views" : "view"}
        </p>
      </div>
      <PostTableOfContents />
      <MDXProvider components={components}>
        <MDXRemote {...mdxSource} />
      </MDXProvider>
      <PreviousNext previous={previous} next={next} />
    </Page>
  );
}