import Link from "next/link";
export default function ProductList() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Products</h1>
      <p className="text-lg">
        This is the products page of our Next.js 15 app.
      </p>
      <ul className="list-disc list-inside">
        <Link href={"products/1"} className="text-lg">
          Product 1
        </Link>
        <Link href={"products/2"} className="text-lg">
          Product 2
        </Link>
        <Link href={"products/3"} className="text-lg">
          Product 3
        </Link>
        <Link href={"products/4"} className="text-lg">
          Product 4
        </Link>
        <Link href={"products/5"} className="text-lg">
          Product 5
        </Link>
        <Link href={"products/6"} className="text-lg" replace>
          Product 6
        </Link>
        <Link href={"products/7"} className="text-lg">
          Product 7
        </Link>
      </ul>
    </main>
  );
}
// Compare this snippet from next15-study/src/app/products/[id]/page.tsx:
