import getPosts from "./getPosts";
export const getStaticPaths = () => {
  return {
    paths: getPosts().map((post) => `/posts/${post.slug}`),
    fallback: false,
  };
};
