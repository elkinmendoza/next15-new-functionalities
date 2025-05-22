export const dynamic = "force-dynamic";

export async function GET() {
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Books" },
    { id: 3, name: "Clothing" },
    { id: 4, name: "Home & Kitchen" },
    { id: 5, name: "Sports & Outdoors" },
  ];
  return Response.json(categories);
}
