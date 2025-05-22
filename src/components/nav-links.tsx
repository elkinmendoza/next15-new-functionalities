import Link from "next/link";


export const NavLinks = () => {
    console.log("NavLinks component rendered");
    return (
        <div className="flex gap-4">
            <Link href="/" className="text-blue-500 hover:underline">Home</Link>
            <Link href="/about" className="text-blue-500 hover:underline">About</Link>
            <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
        </div>
    );
}