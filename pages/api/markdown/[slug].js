import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { slug } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const markdownPath = path.join(process.cwd(), "posts", `${slug}.md`);

    if (!fs.existsSync(markdownPath)) {
      return res.status(404).json({ error: "Markdown file not found" });
    }

    const markdownContent = fs.readFileSync(markdownPath, "utf8");

    // Set content type to plain text
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.status(200).send(markdownContent);
  } catch (error) {
    console.error("Error serving markdown:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
