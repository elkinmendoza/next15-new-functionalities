import Link from "next/link";

export default function F1() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold underline">F1</h1>
      <Link href="/f1/f2" className="text-lg">
        Go to F2
      </Link>

      <Link href="/f3" className="text-lg">
        Go to F3
      </Link>
    </div>
  );
}
