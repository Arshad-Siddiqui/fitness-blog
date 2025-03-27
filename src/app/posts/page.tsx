import getPosts from "../functions/getPosts";
import Link from "next/link";

let posts = getPosts()

export default function Posts() {
  return (
    <article className="flex flex-col justify-center">
      {posts.map((post) => (
        <Link key={post.title} href={"posts/" + post.slug}>
          <div>
            <h2 className="font-bold mt-auto text-lg">{post.title}</h2>
          </div>
          <div>
            <p className="text-grey-600 text-sm mt-auto">{post.date}</p>
          </div>
        </Link>
      ))}
    </article>
  );
}