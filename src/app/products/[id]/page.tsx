export async function generateStaticParams() {
  const categories = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];
  return categories;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Product {id}</h1>
      <p>
        This is a demo app to showcase the new features of Next.js 13.4. It
        includes a dashboard and an about page. The dashboard page is a client
        component that uses React hooks to manage state.
        {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}
