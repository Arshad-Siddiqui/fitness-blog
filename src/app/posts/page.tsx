import { getPosts } from "../getPosts";

let posts = getPosts()

export default function Posts() {
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div key={post.title} className="border-2 p-2">
          <h1 className="text-2xl font-bold mb-1">{post.title}</h1>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
}