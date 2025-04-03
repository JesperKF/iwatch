"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Rightsection = () => {
    return (
        <div className="flex flex-col justify-center gap-2">
            <h1 className="text-white text-6xl font-bold"> The Perfect Moment</h1>
            <p className="text-white text-6xl">Between Past And <br /> Future</p>
            <button className="mt-4 border-2 border-white text-2xl text-white rounded-4xl w-fit px-16 py-4 cursor-pointer hover:text-[#B6CCDA] hover:bg-white">Buy Now</button>
        </div>
    );
}

export default Rightsection;