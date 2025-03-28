import Link from "next/link";

export default function Home() {
  const routes = [
    { name: "Posts", bgColor: "bg-blue-400" },
    { name: "Programming", bgColor: "bg-green-400" },
    { name: "Fitness", bgColor: "bg-red-400" },
  ];

  return (
    <main className="flex justify-center flex flex-col items-center">
        {routes.map((route) => (
          <div key={route.name} className="max-w-md w-full m-2">
            <Link
              href={"/" + route.name.toLowerCase()}
              className={`${route.bgColor} block text-center p-2`}
            >
              {route.name}
            </Link>
          </div>
        ))}
    </main>
  );
}
