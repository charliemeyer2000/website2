import getPosts from "./getPosts";
export const getStaticPaths = () => {
  return {
    paths: getPosts().map((post) => `/blog/${post.slug}`),
    fallback: false,
  };
};
