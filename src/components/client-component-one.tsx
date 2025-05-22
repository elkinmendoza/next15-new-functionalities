"use client";

import { useState } from "react";
export const ClientComponentone = ({children}:{
    children: React.ReactNode
}) => {
    const [name, setName] = useState("Client Component One");
    console.log("ClientComponentone component rendered");
    return (
        <>
      
        <div className="text-lg font-bold">
            Client Component One
        </div>

        {children}
        </>
    );
}