import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toMarkdown } from 'mdast-util-to-markdown';
import { mdxFromMarkdown, mdxToMarkdown } from 'mdast-util-mdx';
import { mdxjs } from 'micromark-extension-mdxjs';

// Custom visitor to remove MDX JSX elements from AST
const removeMDXJSXElements = (tree) => {
  const visit = (node, index, parent) => {
    if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
      // Remove JSX elements entirely
      if (parent && typeof index === 'number') {
        parent.children.splice(index, 1);
        return index;
      }
    }
    
    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        const result = visit(node.children[i], i, node);
        if (typeof result === 'number') {
          i = result;
        }
      }
    }
  };
  
  visit(tree);
  return tree;
};

export default function generateMarkdown() {
  const postsDirectory = path.join(process.cwd(), "posts");
  
  const postFiles = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.match(/\.mdx$/));

  postFiles.forEach((file) => {
    const postFilePath = path.join(postsDirectory, file);
    const postContent = fs.readFileSync(postFilePath, "utf8");
    
    // Use gray-matter to parse frontmatter and content
    const { data: frontmatter, content: mdxContent } = matter(postContent);
    
    // Skip unpublished posts
    if (frontmatter.published === false) {
      return;
    }
    
    try {
      // Parse MDX content into AST
      const tree = fromMarkdown(mdxContent, {
        extensions: [mdxjs()],
        mdastExtensions: [mdxFromMarkdown()]
      });
      
      // Remove MDX JSX elements
      const cleanTree = removeMDXJSXElements(tree);
      
      // Convert back to markdown
      const markdownContent = toMarkdown(cleanTree, {
        extensions: [mdxToMarkdown()]
      });
      
      // Reconstruct the full markdown file
      const markdownFile = matter.stringify(markdownContent, frontmatter);
      
      // Write to .md file
      const slug = frontmatter.slug || file.replace('.mdx', '');
      const markdownPath = path.join(postsDirectory, `${slug}.md`);
      fs.writeFileSync(markdownPath, markdownFile);
      
      console.log(`Generated markdown for: ${slug}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  });
  
  console.log('All markdown files generated successfully!');
}