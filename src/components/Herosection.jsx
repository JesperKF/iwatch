"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Herosection = () => {
    return (
        <section className="hero">
            <div className="rigth">
                <h1>The Perfect Moment Between Past And Future</h1>
                <button>Buy Now</button>
                <div>
                    <IoIosArrowRoundBack />
                    <p>1</p>
                    <IoIosArrowRoundForward />
                </div>
            </div>
            <div className="left">

            </div>
        </section>);
}

export default Herosection;