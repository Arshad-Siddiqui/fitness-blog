const posts: { title: string; date: string; description: string; }[] = [
  {
    title: "first post",
    date: "2025-03-09",
    description: "first post wow",
  },
  {
    title: "second post",
    date: "2025-02-10",
    description: "second post wow",
  },
];

export default function Posts() {
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div key={post.title} className="border-2 p-2">
          <h1 className="text-2xl font-bold mb-1">{post.title}</h1>
          <p className="text-gray-700">{post.description}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
}