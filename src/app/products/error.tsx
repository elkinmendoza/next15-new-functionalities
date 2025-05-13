"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className=" justify-center">
      <div className="flex items-center min-h-full justify-center">
        <div className="text-red-500 text-2xl">
          Error:
          {error.message}
        </div>
      </div>

      <button
        onClick={() => reload()}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}
