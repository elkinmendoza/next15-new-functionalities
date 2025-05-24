export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};
import { getProducts } from "@/prisma-db";
import { ProductList } from "./productList";
export default async function ProductsDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  // Extract query parameter from searchParams
  const { query } = (await searchParams) || {};

  const products: Product[] = await getProducts(query);

  return <ProductList products={products}></ProductList>;
}
