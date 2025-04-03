"use client";

const Navbar = () => {
    return (
        <div className="flex gap-12 text-white text-lg ">
            <a className="rounded-4xl hover:bg-white hover:text-[#B6CCDA] px-8 py-2" href="#0">Mac</a>
            <a className="rounded-4xl hover:bg-white hover:text-[#B6CCDA] px-8 py-2" href="#0">iPhone</a>
            <a className="rounded-4xl hover:bg-white hover:text-[#B6CCDA] px-8 py-2" href="#0">iPad</a>
            <a className="rounded-4xl hover:bg-white hover:text-[#B6CCDA] px-8 py-2" href="#0">iWatch</a>
            <a className="rounded-4xl hover:bg-white hover:text-[#B6CCDA] px-8 py-2" href="#0">Support</a>
        </div>
    );
}

export default Navbar;