"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const currentPage = usePathname();

    return (
        <div className="flex gap-12 text-white text-lg ">
            <a className="rounded-4xl hover:bg-white hover:text-[#B6CCDA] px-8 py-0.5 self-center" href="#0">Mac</a>
            <a className="rounded-4xl hover:bg-white hover:text-[#B6CCDA] px-8 py-0.5 self-center" href="#0">iPhone</a>
            <a className="rounded-4xl hover:bg-white hover:text-[#B6CCDA] px-8 py-0.5 self-center" href="#0">iPad</a>
            <Link className={`rounded-4xl hover:bg-white hover:text-[#B6CCDA] px-8 py-0.5 self-center ${currentPage === "/iwatch" ? "bg-white text-[#B6CCDA]": ""}`} href="/iwatch">iWatch</Link>
            <a className="rounded-4xl hover:bg-white hover:text-[#B6CCDA] px-8 py-0.5 self-center" href="#0">Support</a>
        </div>
    );
}

export default Navbar;
