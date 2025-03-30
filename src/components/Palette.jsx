"use client";

const Colorpalette = ({ selectedColor, onColorChange }) => {
    return (
        <div className="palette">
            <div
                className={`circle navy ${selectedColor === "navy" ? "isactive" : ""}`}
                onClick={() => onColorChange("navy")}
            />
            <div className="dots"></div>
            <div
                className={`circle mint ${selectedColor === "mint" ? "isactive" : ""}`}
                onClick={() => onColorChange("mint")}
            />
            <div className="dots"></div>
            <div
                className={`circle pink ${selectedColor === "pink" ? "isactive" : ""}`}
                onClick={() => onColorChange("pink")}
            />
        </div>
    );
}

export default Colorpalette;