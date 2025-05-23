"use client";

import { useState } from "react";

export const ClientComponenttwo = () => {
    const [name, setName] = useState("Client Component two");
    console.log("ClientComponentone component rendered");
    return (
        <div className="text-lg font-bold">
            Client Component two
        </div> 
    );
}