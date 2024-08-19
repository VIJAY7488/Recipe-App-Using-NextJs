import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-56">
      <h1 className="text-6xl font-semibold">Welcome to Recipe App</h1>
      <Link href={'/recipe-list'} className="text-white text-3xl font-medium bg-blue-700 px-5 py-2 rounded-lg">Explore Recipes</Link>
    </div>
  );
}
