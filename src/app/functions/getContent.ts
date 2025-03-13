import path from "path";

export default function getContent(slug: string) {
  const postsDirectory = "../../../content"
  const postPath = path.join(postsDirectory, `${slug}.mdx`);
  const PostComponent = require(postPath).default;
  return PostComponent
}