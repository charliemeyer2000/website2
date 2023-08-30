import getPosts from "./getPosts";
export const getStaticPaths = () => {
  return {
    // also add a path that routes "/resume" to "/static/images/resume.pdf"
    paths: getPosts().map((post) => `/posts/${post.slug}`) && ["/resume"],
    fallback: false,
  };
};
