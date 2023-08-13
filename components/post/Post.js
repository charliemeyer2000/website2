import Head from 'next/head';
import styles from './Post.module.scss';
import Page from "../page/Page";
import { MDXRemote } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";
import components from "@/static/types/Components";
import { useTheme } from "next-themes";

export default function Post(props) {
  const { title, date, mdxSource, previous, next, slug } = props;

  return (
    <Page title={title} description={title} date={date}>
      <MDXProvider components={components}>
        <MDXRemote {...mdxSource} />
      </MDXProvider>
    </Page>
  );
}