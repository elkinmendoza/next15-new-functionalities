export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length === 3) {
    return (
      <main>
        <h1 className="text-3xl font-bold underline">Manual Detail</h1>
        <p className="text-lg">This concept </p>
        <p className="text-lg">Slug: {slug.join("/")}</p>
      </main>
    );
  }

  if (slug?.length === 2) {
    return (
      <main>
        <h1 className="text-3xl font-bold underline">Docs</h1>
        <p className="text-lg">This concept </p>
        <p className="text-lg">Slug: {slug.join("/")}</p>
      </main>
    );
  }
  if (slug?.length === 1) {
    return (
      <main>
        <h1 className="text-3xl font-bold underline">Docs</h1>
        <p className="text-lg">this a routing feature</p>
        <p className="text-lg">Slug: {slug.join("/")}</p>
      </main>
    );
  }
  if (slug?.length === 0) {
    return (
      <main>
        <h1 className="text-3xl font-bold underline">
          This is just a main PAge
        </h1>
        <p className="text-lg">This is the docs page of our Next.js 15 app.</p>
      </main>
    );
  } else {
    return (
      <main>
        <h1 className="text-3xl font-bold underline">Docs</h1>
        <p className="text-lg">This is the docs page of our Next.js 15 app.</p>
      </main>
    );
  }
}
