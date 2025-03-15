import getPosts from "../functions/getPosts";
import Link from "next/link";

let posts = getPosts()
let lineStyle = "border-b-2 h-10 border-gray-400 flex flex-col"

export default function Posts() {
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Link key={post.title} href={"posts/" + post.slug}>
          <div className={lineStyle}>
            <h1 className="text-2xl font-bold mt-auto">{post.title}</h1>
          </div>
          <div className={lineStyle}>
            <p className="text-grey-600 text-1/2 mt-auto">{post.date}</p>
          </div>
          <div className={lineStyle}>
            <p className="text-grey-600 text-1/2 mt-auto" />
          </div>
        </Link>
      ))}
    </div>
  );
}