import { Metadata } from "next";

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const RawParams = await params;

  return {
    title: `Product ${RawParams.productId}`,
    description: `This is the product ${RawParams.productId} page of our Next.js 15 app.`,
  };
};

export default async function ProductDetail({ params }: Props) {
  const { productId } = await params;
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Product Detail</h1>
      <p className="text-lg">Product ID: {productId}</p>
    </main>
  );
}
