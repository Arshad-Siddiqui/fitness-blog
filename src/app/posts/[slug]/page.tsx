import getContent from "@/app/functions/getContent";

export default function Post({ params }: { params: { slug: string } }) {
  const PostComponent = getContent(params.slug)

  return (
    <article>
      <PostComponent />
    </article>
  );
}