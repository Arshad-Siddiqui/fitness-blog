import Link from "next/link";

export default function Home() {
  return (
      <main className="flex justify-center home flex flex-col items-center">
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href='/programming'>Programming</Link>
        </li>
        <li>
          <Link href="/fitness">Fitness</Link>
        </li>
      </main>
  );
}
