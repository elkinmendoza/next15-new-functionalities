import { Navbar } from "@/components/navbar";


export default function LandingPage() {
    return (
        <>
        <Navbar />
        <section className="w-full h-screen  my-12 m-auto">
            <h1>Landing Page</h1>
            <p className="text-center text-2xl">Welcome to the Landing Page!</p>
            <p className="text-center text-2xl">This is a demo of Next.js 13.4 features.</p>
        </section>
        </>
    );
}