"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ErrorPage() {
  const pathname = usePathname();
  const errorMessage = `The page at ${pathname} does not exist.`;

  const allRoutes = pathname?.split("/");

  console.log(allRoutes, errorMessage);

  return (
    <main className="bg-purple flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-extrabold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>

      <p className="text-lg mt-4 text-center">
        Sorry, the page you are looking for does not exist.
      </p>

      <p className="text-sm mt-2 text-gray-600">
        Current path segments: {allRoutes?.join(" / ") || "None"}
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}
