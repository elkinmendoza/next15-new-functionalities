"use client";
// This is the error component for the reviews page

import "./globals.css";

export default function GlobalError() {
  return (
    <html>
      <body>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold underline">Global Error</h1>
          <p className="text-lg">Something went wrong!</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              // This is a client component, so we can use the router
              // to refresh the page
              window.location.reload();
            }}
          >
            refresh
          </button>
        </div>
      </body>
    </html>
  );
}
