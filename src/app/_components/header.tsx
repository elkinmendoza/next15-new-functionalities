"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  console.log(pathName);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
  ];
  const isActive = (href: string) => {
    return pathName === href;
  };
  const isActiveClass = (href: string) => {
    return pathName === href
      ? "text-blue-500"
      : "text-white hover:text-gray-300";
  };
  return (
    <header>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl">My Next.js App</h1>
        </div>
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{ fontWeight: isActive(link.href) ? 700 : "normal" }}
                  className={isActiveClass(link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            <li>
              <Link href="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="text-white hover:text-gray-300">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
