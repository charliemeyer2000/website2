import getPosts from "@/utils/hooks/getPosts";
import PostList from "@/components/postList/PostList";
import Page from "@/components/page/Page";

export default function Blog({ posts }) {
  console.log(posts);

  return (
    <Page title="All articles" description="All articles on charliemeyer.xyz">
      <PostList posts={posts} />
    </Page>
  );
}

export const getStaticProps = () => {
    const posts = getPosts();

    return {
        props: {
            posts
        }
    }
}
