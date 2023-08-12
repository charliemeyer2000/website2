import getPosts from "@/utils/hooks/getPosts";

export default function Blog({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </li>
        ))}
      </ul>
    </div>
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
