export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white p-4 w-full fixed top-0 border-b-4 border-red-500">
      <button className="text-blue-500">Menu</button>
      <h1 className="absolute left-1/2 transform -translate-x-1/2 font-bold text-2xl">Paper Fitness</h1>
    </header>
  );
}