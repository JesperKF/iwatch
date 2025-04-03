"use client";

const Colorpalette = ({ selectedColor, onColorChange }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div
                className={`rounded-4xl border-2 border-white w-10 h-10 bg-[#404354] transition-transform duration-300 ease-in-out ${selectedColor === "navy" ? "scale-125" : ""}`}
                onClick={() => onColorChange("navy")}
            />
              <div className="flex flex-col items-center gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div
                className={`rounded-4xl border-2 border-white w-10 h-10 bg-[#58D7C4] transition-transform duration-300 ease-in-out ${selectedColor === "mint" ? "scale-125" : ""}`}
                onClick={() => onColorChange("mint")}
            />
           <div className="flex flex-col items-center gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div
                className={`rounded-4xl border-2 border-white w-10 h-10 bg-[#B1C7D5] transition-transform duration-300 ease-in-out ${selectedColor === "ocean" ? "scale-125" : ""}`}
                onClick={() => onColorChange("ocean")}
            />
        </div>
    );
}

export default Colorpalette;