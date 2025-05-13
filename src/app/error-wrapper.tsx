"use client";

import { useState } from "react";
import "./globals.css";

interface ErrorWrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An error occurred",
}: {
  message: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <div className="justify-center">
      <button
        onClick={() => setError(true)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Simulate Error
      </button>
    </div>
  );
};

export default function ErrorWrapper({ children }: ErrorWrapperProps) {
  return (
    <div className="justify-center">
      <ErrorSimulator message="Simulated error in root layout" />

      {children}
    </div>
  );
}
