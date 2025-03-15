import Link from "next/link";

export default function Header() {
  return (
    <Link href="/">
      <header className="border-b-4 border-red-500 h-12 flex flex-col">
        <h1 className="text-2xl font-bold ml-1 mt-auto">Paper Fitness</h1>
      </header>
    </Link>
  );
}