"use client";
import Image from 'next/image'

const Threewatches = ({ onColorChange }) => {
    return (
        <div className="options">
            <div className="option1-container" onClick={() => onColorChange("navy")}>
                <Image src="/iwatchimg/navy.png" alt="navy" width={90} height={90} />
            </div>
            <div className="option3-container" onClick={() => onColorChange("mint")}>
                <Image src="/iwatchimg/mint.png" alt="mint" width={90} height={90} />
            </div>
            <div className="option2-container" onClick={() => onColorChange("pink")}>
                <Image src="/iwatchimg/pink.png" alt="pink" width={90} height={90} />
            </div>
        </div>
    );
}

export default Threewatches;

