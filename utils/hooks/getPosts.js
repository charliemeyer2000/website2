import matter from "gray-matter";
import fs from "fs";
import path from "path";

export default function getPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");

  const postFiles = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.match(/\.mdx$/));

  const posts = postFiles
    .map((file) => {
      const postFilePath = path.join(postsDirectory, file);
      const postContent = fs.readFileSync(postFilePath, "utf8");
      const { data, content } = matter(postContent);

      if (data.published === false) {
        return null;
      }

      return { ...data, body: content };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

// optional metadata for searching posts by tag
//   const meta = posts.map(p => ({ ...p, body: null }))
//   fs.writeFileSync(
//     path.resolve(process.cwd(), 'data/blog.json'),
//     JSON.stringify(meta)
//   )
