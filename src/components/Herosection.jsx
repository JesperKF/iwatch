"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Herosection = () => {
    return (
        <section className="hero">
            <div className="right">
                <h1 className="fat"> The Perfect Moment</h1>
                <p>Between Past And Future</p>
                <button>Buy Now</button>
                <div className="page">
                    <IoIosArrowRoundBack className="arrow" />
                    <p className="number">1</p>
                    <IoIosArrowRoundForward className="arrow" />
                </div>
            </div>
            <div className="left">
                <div className="selected">
                    <img className="big" src="/iwatchimg/navy.png" alt="navy" />
                    <img className="palette" src="/iwatchimg/farvepalette.png" alt="palette" />
                </div>
                <div className="options">
                    <div className="option1-container">
                        <img className="option1" src="/iwatchimg/navy.png" alt="navy" />
                    </div>
                    <div className="option2-container">
                        <img className="option2" src="/iwatchimg/ocean.png" alt="ocean" />
                    </div>
                    <div className="option3-container">
                        <img className="option3" src="/iwatchimg/mint.png" alt="mint" />
                    </div>
                </div>
            </div>
        </section>);
}

export default Herosection;