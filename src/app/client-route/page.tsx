"use client";
import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
    const result = serverSideFunction();
    return (
        <section className="w-full h-screen  my-12 m-auto">
            <h1>Client Route {result}</h1>
        </section>
    );
}