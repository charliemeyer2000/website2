#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import generateRSS from "../utils/generateRSS.js";
import generateMarkdown from "../utils/generateMarkdown.js";

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
  const postsModTime = getPostsModificationTime();
  const rssModTime = getRSSModificationTime();

  // Generate RSS and markdown if posts are newer than RSS file
  if (postsModTime > rssModTime) {
    console.log(
      "Posts have been modified. Generating new RSS feed and markdown files..."
    );
    generateRSS();
    generateMarkdown();

    // Add the RSS file and markdown files to git staging
    try {
      execSync("git add public/rss.xml", { stdio: "inherit" });
      execSync("git add posts/*.md", { stdio: "inherit" });
      console.log("RSS feed and markdown files added to git staging area.");
    } catch (error) {
      console.error("Error adding files to git:", error.message);
    }
  } else {
    console.log("RSS feed and markdown files are up to date.");
  }
}

main();
