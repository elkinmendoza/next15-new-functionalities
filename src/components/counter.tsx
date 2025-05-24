"use client";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const { isLoaded, userId, sessionId } = useAuth();
  //   const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !userId || !sessionId) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center align-middle text-center w-full">
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Decrement
      </button>
    </div>
  );
};
