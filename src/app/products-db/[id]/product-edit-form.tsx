"use client";
import { editProduct, FormState } from "@/actions/products";
import { Submit } from "@/components/submit";
import { useActionState } from "react";
import type { Product } from "@/app/products-db/page";
import { updateProduct } from "@/prisma-db";

export default function EditProductForm({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithID = editProduct.bind(null, product.id);
  const [state, formAction, isPending] = useActionState(
    editProductWithID,
    initialState
  );

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
          defaultValue={product.title}
        />
      </label>
      {state.errors.title && (
        <p className="text-red-500 text-sm">{state.errors.title}</p>
      )}
      <label className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          name="price"
          defaultValue={product.price}
        />
      </label>
      {state.errors.price && (
        <p className="text-red-500 text-sm">{state.errors.price}</p>
      )}
      <label className="text-white">
        Description
        <textarea
          className="block w-full p-2 text-black border rounded"
          name="description"
          defaultValue={product.description || ""}
        />
      </label>
      {state.errors.description && (
        <p className="text-red-500 text-sm">{state.errors.description}</p>
      )}

      {isPending ? (
        <p className="text-gray-500 text-sm">Submitting...</p>
      ) : (
        <p className="text-gray-500 text-sm">Ready to submit</p>
      )}
      <Submit />
    </form>
  );
}
