import Link from "next/link";

export default function Header() {
  return (
    <Link href="/">
      <header className="border-b-4 border-blue-500 h-12 bg-gray-200 flex items-center">
        <div className="header-left-box border-red-500 border-r-4 h-full w-14 flex-none" />
        <div className="text-2xl font-bold ml-2">
          <h1>Paper Fitness</h1>
        </div>
      </header>
    </Link>
  );
}