import Link from "next/link";

export default function Header() {
  return (
    <Link href="/">
      <header className="border-b-4 border-blue-500 h-12 bg-gray-200 flex">
        <div className="header-left-box border-red-500 border-r-4 h-full w-14 flex-none" />
        <div className="text-2xl font-bold ml-2 flex">Paper Fitness</div>
      </header>
    </Link>
  );
}