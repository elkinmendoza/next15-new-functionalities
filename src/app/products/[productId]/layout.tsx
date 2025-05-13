function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const randomNumber = getRandomInt(1, 100);
  if (randomNumber > 50) {
    throw new Error("Error error loading product details");
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Product Details</h1>
      <p className="text-lg">This is the product details page.</p>
      {children}
    </div>
  );
}
