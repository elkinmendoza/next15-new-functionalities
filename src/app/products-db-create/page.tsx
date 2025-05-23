import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

async function createProduct(formData: FormData) {
  "use server";
  const title = formData.get("title") as string;
  const price = (formData.get("price") as string) || "0";
  const description = formData.get("description") || null;
  console.log("createProduct", formData);
  await addProduct(title, parseInt(price), description as string);

  redirect("/products-db");
}

export default function AddProduct() {
  return (
    <form action={createProduct} className="p-4 space-y-4 max-w-96">
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
        />
      </label>
      <label className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          name="price"
        />
      </label>
      <label className="text-white">
        Description
        <textarea
          className="block w-full p-2 text-black border rounded"
          name="description"
        />
      </label>
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
      >
        Add Product
      </button>
    </form>
  );
}
