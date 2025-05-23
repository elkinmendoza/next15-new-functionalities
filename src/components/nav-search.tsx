
"use client";

import { useState } from "react";

export const NavSearch = () => {
    const [search, setSearch] = useState("");

    console.log("NavSearch component rendered");
    return (
        <div className="flex items-center">
            <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded px-2 py-1"
            />
            <button className="ml-2 bg-blue-500 text-white rounded px-4 py-1">
                Search
            </button>
        </div>
    );
}