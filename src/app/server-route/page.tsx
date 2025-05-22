import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
    const result = serverSideFunction();
    return (
        <section className="w-full h-screen  my-12 m-auto">
        <h1>Server Route {result}</h1>
        </section>
    );
    }