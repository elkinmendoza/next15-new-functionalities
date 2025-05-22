import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <p>
        This is a demo app to showcase the new features of Next.js 13.4. It
        includes a dashboard and an about page. The dashboard page is a client
        component that uses React hooks to manage state.
        {new Date().toLocaleTimeString()}
      </p>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>
    </div>
  );
}
