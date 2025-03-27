"use client";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBag3Line } from "react-icons/ri"

const Searchbasket = () => {
    return (
        <div className="basketsearch">
            <button className="lup"><FiSearch /></button>
            <span>|</span>
            <button className="pose"><RiShoppingBag3Line /></button>
        </div>
    )
}

export default Searchbasket; 