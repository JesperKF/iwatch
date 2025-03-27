"use client";
import Logo from "./Logo"
import Searchbasket from "./Searchbasket";

const Header = () => {
    return (
        <header>
            <section className="headerinfo">
                <div className="logo">
                    <Logo />
                </div>
                <div className="links">
                    <a href="#0">Mac</a>
                    <a href="#0">iPhone</a>
                    <a href="#0">iPad</a>
                    <a href="#0">iWatch</a>
                    <a href="#0">Support</a>
                </div>
                <Searchbasket />
            </section>
        </header>
    )
}

export default Header;