#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import generateRSS from "../utils/generateRSS.mjs";
import generateMarkdown from "../utils/generateMarkdown.mjs";

function getStagedFiles() {
  try {
    const output = execSync("git diff --cached --name-only", {
      encoding: "utf8",
      stdio: "pipe",
    });
    return output
      .trim()
      .split("\n")
      .filter((file) => file.length > 0);
  } catch (error) {
    console.error("Error getting staged files:", error.message);
    return [];
  }
}

function getStagedPostFiles() {
  const stagedFiles = getStagedFiles();
  return stagedFiles.filter(
    (file) => file.startsWith("posts/") && file.match(/\.mdx?$/)
  );
}

function getPostsModificationTime() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const postFiles = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.match(/\.mdx?$/))
    .map((file) => path.join(postsDirectory, file));

  let latestModTime = 0;
  postFiles.forEach((file) => {
    const stats = fs.statSync(file);
    if (stats.mtime.getTime() > latestModTime) {
      latestModTime = stats.mtime.getTime();
    }
  });

  return latestModTime;
}

function getRSSModificationTime() {
  const rssPath = path.join(process.cwd(), "public", "rss.xml");
  if (!fs.existsSync(rssPath)) {
    return 0;
  }
  const stats = fs.statSync(rssPath);
  return stats.mtime.getTime();
}

function main() {
  const stagedPostFiles = getStagedPostFiles();

  // Only proceed if there are staged post files
  if (stagedPostFiles.length === 0) {
    console.log(
      "No post files staged for commit. Skipping RSS/markdown generation."
    );
    return;
  }

  console.log(
    `Found ${stagedPostFiles.length} staged post file(s):`,
    stagedPostFiles
  );

  const postsModTime = getPostsModificationTime();
  const rssModTime = getRSSModificationTime();

  // Generate RSS and markdown if posts are newer than RSS file
  if (postsModTime > rssModTime) {
    console.log(
      "Staged posts have been modified. Generating new RSS feed and markdown files..."
    );
    generateRSS();
    generateMarkdown();

    // Only add generated files that correspond to staged source files
    try {
      // Always add RSS if we generated it due to staged post changes
      execSync("git add public/rss.xml", { stdio: "inherit" });
      console.log("RSS feed added to git staging area.");

      // Only add markdown files that correspond to staged MDX files
      stagedPostFiles.forEach((postFile) => {
        const baseName = path.basename(postFile, path.extname(postFile));
        const markdownFile = `posts/${baseName}.md`;

        // Check if the markdown file exists before trying to add it
        if (fs.existsSync(markdownFile)) {
          execSync(`git add "${markdownFile}"`, { stdio: "inherit" });
          console.log(`Added generated markdown file: ${markdownFile}`);
        }
      });
    } catch (error) {
      console.error("Error adding files to git:", error.message);
    }
  } else {
    console.log("RSS feed and markdown files are up to date.");
  }
}

main();
