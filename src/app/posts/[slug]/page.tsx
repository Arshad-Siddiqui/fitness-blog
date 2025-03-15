import getContent from "@/app/functions/getContent";

export default async function Post({ params }: { params: { slug: string } }) {
  // Made asynchronous to not upset Next JS stomach
  const { slug } = await params
  const PostComponent = getContent(slug)

  return (
    <article className="ml-1">
      <PostComponent />
    </article>
  );
}