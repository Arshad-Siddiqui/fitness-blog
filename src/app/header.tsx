import Link from "next/link";

export default function Header() {
  return (
    <Link href="/">
      <header className="border-b-4 border-blue-500 h-12 flex items-center justify-center bg-gray-200">
        <span className="header-left-box border-red-500 border-r-4 h-full" />
        <h1 className="text-2xl font-bold ml-2">Paper Fitness</h1>
      </header>
    </Link>
  );
}