"use client";
import Image from 'next/image'

const Threewatches = ({ onColorChange }) => {
    return (
        <div className="flex justify-center gap-8 mt-8">
            <div className="relative inline-block p-5 before:content-[''] before:absolute before:w-full before:h-3/5 before:bg-[rgba(67,69,88,0.6)] before:bottom-0 before:left-0 before:rounded-2xl before:-z-10" onClick={() => onColorChange("navy")}>
                <Image src="/iwatchimg/navy.png" alt="navy" width={90} height={90} />
            </div>
            <div className="relative inline-block p-5 before:content-[''] before:absolute before:w-full before:h-3/5 before:bg-[rgba(106,221,204,0.6)] before:bottom-0 before:left-0 before:rounded-2xl before:-z-10" onClick={() => onColorChange("mint")}>
                <Image src="/iwatchimg/mint.png" alt="mint" width={90} height={90} />
            </div>
            <div className="relative inline-block p-5 before:content-[''] before:absolute before:w-full before:h-3/5 before:bg-[rgba(177,199,213,0.6)] before:bottom-0 before:left-0 before:rounded-2xl before:-z-10" onClick={() => onColorChange("ocean")}>
                <Image src="/iwatchimg/ocean.png" alt="ocean" width={90} height={90} />
            </div>
        </div>
    );
}

export default Threewatches;

