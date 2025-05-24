"use client";
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};
import { removeProduct } from "@/actions/products";
import Link from "next/link";
import { useOptimistic } from "react";

export const ProductList = ({ products }: { products: Product[] }) => {
  const productsList = products;
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    productsList,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id != productId);
    }
  );

  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId);
    await removeProduct(productId);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 ">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {optimisticProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">
              <Link
                href={`/products-db/${product.id}`}
                className="text-blue-500 hover:underline"
              >
                {product.title}
              </Link>
            </h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-500 text-sm mt-2">
              Price: ${product.price}
            </p>
            <p className="text-gray-500 text-sm">Product ID: {product.id}</p>
            <form action={removeProductById.bind(null, product.id)}>
              <button
                type="submit"
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};
