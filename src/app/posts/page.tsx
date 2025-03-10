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
    <div className="container mx-auto p-4">
      {posts.map((post) => (
        <div key={post.title} className="bg-white shadow-md p-2 mb-2">
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-700">{post.description}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
}