import getPosts from './hooks/getPosts.js';
import fs from 'fs';
import path from 'path';

export default function generateRSS() {
  const posts = getPosts();
  const siteUrl = 'https://charliemeyer.xyz';
  const author = 'Charlie Meyer';
  const email = 'charlie@charliemeyer.xyz';
  
  const rssItems = posts.map(post => {
    const postUrl = `${siteUrl}/posts/${post.slug}`;
    const pubDate = new Date(post.date).toUTCString();
    
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.description || ''}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>${email} (${author})</author>
    </item>`;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Charlie Meyer's Blog</title>
    <link>${siteUrl}</link>
    <description>Personal blog by Charlie Meyer</description>
    <language>en-us</language>
    <managingEditor>${email} (${author})</managingEditor>
    <webMaster>${email} (${author})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  const publicPath = path.join(process.cwd(), 'public', 'rss.xml');
  fs.writeFileSync(publicPath, rss.trim());
  
  console.log('RSS feed generated successfully!');
  return rss;
}