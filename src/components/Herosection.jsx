"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Threewatches from "./Threewatches";
import Colorpalette from "./Palette";
import Image from "next/image";

const Herosection = () => {
    return (
        <section className="hero">
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
            <div className="left">
                <div className="selected">
                    <div className="img-wrapper">
                        <Image
                            src="/iwatchimg/navy.png"
                            alt="navy"
                            width={486}
                            height={486}
                        />
                    </div>
                    <Colorpalette />
                </div>
                <Threewatches />
            </div>
        </section>);
}

export default Herosection;