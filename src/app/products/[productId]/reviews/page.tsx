export default async function AllReviews({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const reviews = [
    { id: 1, content: "Great product!" },
    { id: 2, content: "Very useful and well-made." },
    { id: 3, content: "Would definitely recommend to others." },
  ];

  const { productId } = await params;

  return (
    <main>
      <h1 className="text-3xl font-bold underline">All Reviews</h1>
      <p className="text-lg">Product ID: {productId}</p>
      <ul className="mt-4">
        {reviews.map((review) => (
          <li key={review.id} className="mb-2">
            {review.content}
          </li>
        ))}
      </ul>
    </main>
  );
}
