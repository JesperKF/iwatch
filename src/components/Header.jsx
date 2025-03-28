"use client";
import Logo from "./Logo"
import Navbar from "./Navbar";
import Searchbasket from "./Searchbasket";

const Header = () => {
    return (
        <header>
            <section className="headerinfo">
                <div className="logo">
                    <Logo />
                </div>
                <Navbar />
                <Searchbasket />
            </section>
        </header>
    )
}

export default Header;