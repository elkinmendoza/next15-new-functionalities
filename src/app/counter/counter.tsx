"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-extrabold text-blue-500">Counter</h1>
      <p className="text-2xl font-semibold mt-4">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Increment
      </button>
    </div>
  );
}
