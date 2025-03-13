import Link from "next/link";

export default function Home() {
  return (
      <main className="flex justify-center home">
        <Link href="/posts">Posts</Link>
      </main>
  );
}
