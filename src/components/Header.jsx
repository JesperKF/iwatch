"use client";
import Logo from "./Logo"
import Navbar from "./Navbar";
import Searchbasket from "./Searchbasket";

const Header = () => {
    return (
        <header className="col-span-full">
            <section className="flex justify-between py-4">
               <Logo />
                <Navbar />
                <Searchbasket />
            </section>
        </header>
    )
}

export default Header;