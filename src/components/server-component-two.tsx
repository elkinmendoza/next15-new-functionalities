import fs from "fs";
export  const ServerComponenttwo = () => {
    fs.writeFileSync("server-component-two.tsx", "utf-8");
    console.log("ServerComponent2 rendered");
    return (
        <div className="text-lg font-bold">
            Server Component 2
        </div>
    );
}