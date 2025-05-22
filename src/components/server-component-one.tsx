import fs from "fs";
import { ServerComponenttwo } from "./server-component-two";
import { ClientComponentone } from "./client-component-one";

export  const ServerComponentOne = () => {
    fs.writeFileSync("server-component-one.tsx", "utf-8");
    console.log("ServerComponent 1 rendered");
    return (
        <>
        <div className="text-lg font-bold">
            Server Component 1
        </div>
        <ServerComponenttwo />
        <ClientComponentone />
        
        </>
    );
}