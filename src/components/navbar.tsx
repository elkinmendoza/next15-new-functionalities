import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";

export const Navbar = () => {
    console.log("Navbar component rendered");
    return (
        <nav className="">
        <div className="text-lg font-bold">My App</div>
        <NavLinks/>
        <NavSearch/>
        </nav>
    );
    }