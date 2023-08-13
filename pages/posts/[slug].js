import getPosts from "@/utils/hooks/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight/lib";
import Post from "@/components/post/Post";

// options for code highlighting
const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

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
    paths: getPosts().map((p) => `/posts/${p.slug}`),
    fallback: false,
  };
};

// page component
export default function PostPage(props) {
  return <Post {...props} />;
}
