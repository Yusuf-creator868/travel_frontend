import React from "react";
import Card from "./Cards";

const Destination = () => {


    return (
        <section id="destination" className="flex flex-col items-center justify-center bg-gray-100 py-20 px-6 gap-10">
            <h1 className="text-3xl text-green-950">DESTINATION</h1>
            <h1 className="text-6xl font-[100px]">Discover our most popular tours!</h1>
            <p className="text-[18px] max-w-[500px] text-center text-gray-500">We recommend several beautiful tourist attractions in centain countries, please choose your favorite tourist attraction.</p>

            
                <Card />
            

            <button className="mt-6 md:mt-0 bg-green-900 text-white px-6 py-3 rounded-full hover:bg-green-800 transition cursor-pointer flex items-center gap-2 w-fit">
                Explore more
                <span>→</span>
            </button>

        </section>
    )
}

export default Destination