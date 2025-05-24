import Form from "next/form";
export const Search = () => {
  return (
    <Form
      action="/products-db"
      className="flex items-center justify-between w-full max-w-md p-2 border rounded"
    >
      <input
        type="text"
        name="query"
        placeholder="Search products..."
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </Form>
  );
};
