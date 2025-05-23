"use client";

import { useState } from "react";
export default function DashboardPage() {
  const [name, setName] = useState("John Doe");
  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>hello{name}</p>
    </div>
  );
}
