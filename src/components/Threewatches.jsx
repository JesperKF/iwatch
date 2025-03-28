"use client";
import Image from 'next/image'

const Threewatches = () => {
    return (
        <div className="options">
            <div className="option1-container">
                <Image
                    src="/iwatchimg/navy.png"
                    alt="navy"
                    width={90}
                    height={90}
                />
            </div>
            <div className="option3-container">
                <Image
                    src="/iwatchimg/mint.png"
                    alt="mint"
                    width={90}
                    height={90}
                />
            </div>
            <div className="option2-container">
                <Image
                    src="/iwatchimg/pink.png"
                    alt="pink"
                    width={90}
                    height={90}
                />
            </div>
        </div>);
}

export default Threewatches;

