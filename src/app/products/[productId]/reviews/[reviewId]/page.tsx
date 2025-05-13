import { notFound } from "next/navigation";

// function getRandomInt(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) {
  const { reviewId } = await params;
  if (Number(reviewId) > 150) {
    notFound();
    // redirect("/products");
  }
  // const randomNumber = getRandomInt(1, 100);
  // if (randomNumber > 50) {
  //   throw new Error("Error error loading review");
  // }
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Review Detail</h1>
      <p className="text-lg">Review ID: {reviewId}</p>
    </main>
  );
}
