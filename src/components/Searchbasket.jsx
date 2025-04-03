"use client";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBag3Line } from "react-icons/ri"

const Searchbasket = () => {
    return (
        <div className="flex gap-2">
            <button className="text-white text-2xl"><FiSearch /></button>
            <span className="text-white self-center">|</span>
            <button className="text-white text-2xl"><RiShoppingBag3Line /></button>
        </div>
    )
}

export default Searchbasket; 