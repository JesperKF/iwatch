"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Rightsection = () => {
    return (
        <div className="right">
            <h1 className="fat"> The Perfect Moment</h1>
            <p>Between Past And <br /> Future</p>
            <button>Buy Now</button>
            <div className="page">
                <IoIosArrowRoundBack className="arrow" />
                <p className="number">1</p>
                <IoIosArrowRoundForward className="arrow" />
            </div>
        </div>
    );
}

export default Rightsection;