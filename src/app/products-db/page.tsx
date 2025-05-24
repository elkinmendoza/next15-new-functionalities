export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};
import { getProducts } from "@/prisma-db";
import { ProductList } from "./productList";
export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();

  return <ProductList products={products}></ProductList>;
}
