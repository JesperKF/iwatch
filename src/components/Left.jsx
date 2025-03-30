"use client";
import Threewatches from "./Threewatches";
import Colorpalette from "./Palette";
import Image from "next/image";
import { useState } from "react";

const Leftsection = () => {
    const [watchColor, setWatchColor] = useState("navy");

    const handleColorChange = (color) => {
        setWatchColor(color);
    };

    return (
        <div className="left">
            <div className="selected">
                <div className="img-wrapper">
                    <Image
                        src={`/iwatchimg/${watchColor}.png`}
                        alt={watchColor}
                        width={486}
                        height={486}
                    />
                </div>
                <Colorpalette selectedColor={watchColor} onColorChange={handleColorChange} />
            </div>
            <Threewatches onColorChange={handleColorChange} />
        </div>
    );
}

export default Leftsection;