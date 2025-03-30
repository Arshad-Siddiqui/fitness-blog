import getContent from "@/app/functions/getContent";

export default async function Post({ params }: { params: { slug: string } }) {
  // Made asynchronous to not upset Next JS stomach
  const { slug } = await params;
  const PostComponent = getContent(slug);

  return (
    <article className="mx-auto max-w-prose p-4 border-2 border-black-500 mt-2">
      <PostComponent />
    </article>
  );
}