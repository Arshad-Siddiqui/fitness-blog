import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar border-r-4 border-blue-500 w-14 h-screen">
      <div className="top-box h-12 border-b-4 border-red-500" />
      <div className="bottom-box">
        <Link href="/posts">
          <Image src="/house.png" alt="house icon" width="200" height="200" />
        </Link>
      </div>
    </div>
  );
}