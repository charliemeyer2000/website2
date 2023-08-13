import getPosts from "@/utils/hooks/getPosts";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXProvider } from "@mdx-js/react";
import components from "@/static/types/Components";
import rehypeHighlight from "rehype-highlight/lib";
import { useTheme } from "next-themes";

// options for code highlighting
const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight]
  }
}

// get static props which will be passed to the page component as props
export async function getStaticProps({ params: { slug } }) {
  const posts = getPosts();
  const postIndex = posts.findIndex((post) => post.slug === slug);
  const post = posts[postIndex];
  const { body, ...stuff } = post;

  return {
    props: {
      previous: posts[postIndex + 1] || null,
      next: posts[postIndex - 1] || null,
      ...stuff,
      mdxSource: await serialize(body, options),
    },
  };
}

// get static paths which will be passed to the page component as props
export const getStaticPaths = () => {
  return {
    paths: getPosts().map((p) => `/blog/${p.slug}`),
    fallback: false,
  };
};

// page component (move to components folder later once testing is done)
export default function PostPage(props) {
  const { theme, setTheme } = useTheme();
  return (
    <MDXProvider components={components}>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
      <MDXRemote {...props.mdxSource} />
    </MDXProvider>
  );
}
