"use client";
import Leftsection from "./Left";
import Rightsection from "./Right";


const Herosection = () => {
    return (
        <section className="grid grid-cols-2">
            <Rightsection />
            <Leftsection />
        </section>);
}

export default Herosection;