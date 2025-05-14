import Image from "next/image";
import wonderImages from "./wonders";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-2xl font-bold">Photo Feed</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-4">
        {wonderImages.map((_) => (
          <div
            key={_.id}
            className="relative w-full pb-[100%] bg-gray-200 rounded-lg overflow-hidden"
          >
            <Link href={`/photo-feed/${_.id}`}>
              <Image
                width={500}
                height={500}
                src={_.src}
                alt={_.name}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
