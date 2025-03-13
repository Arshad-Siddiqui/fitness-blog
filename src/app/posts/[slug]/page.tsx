import path from "path";

const postsDirectory = "../../../../content"

export default function Post({ params }: { params: { slug: string } }) {
  const postPath = path.join(postsDirectory, `${params.slug}.mdx`);

  const PostComponent = require(postPath).default;

  return (
    <article>
      <PostComponent />
    </article>
  );
}