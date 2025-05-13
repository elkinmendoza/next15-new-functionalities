"use client";
import { useState } from "react";
export default function FormExample() {
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Form Example</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 rounded p-2"
          placeholder="Type something..."
        />
      </form>
    </div>
  );
}
