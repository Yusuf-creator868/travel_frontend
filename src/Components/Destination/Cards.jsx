import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import cemara from "../../assets/cemara.jpg"
import everest from "../../assets/everest.webp"
import kaje from "../../assets/kaje.jpg"
import bambu from "../../assets/bambu.avif"

const Card = () => {

    const cards = [
        { img: cemara, name: "Cemara Hill", country: "Tokyo, Japan", cost: "$280" },
        { img: everest, name: "Mountain Everest", country: "Nepal", cost: "$230" },
        { img: kaje, name: "Kaje Beach", country: "Agde, France", cost: "$200" },
        { img: bambu, name: "Bambu Waterfall", country: "Bali, Indonesia", cost: "$150" },
    ]


    return (
        <section className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-10">
            {cards.map((pres, index) => {
                return (
                    <div key={index} className="rounded-[20px] shadow-2xl hover:scale-105 transition duration-500 cursor-pointer">
                        <img src={pres.img} alt="places" className="w-[300px] h-[300px] rounded-t-[20px] object-cover" />
                        <div className="px-5 py-3 flex flex-col gap-5">
                            <h1 className="text-2xl font-bold">{pres.name}</h1>
                            <div className="flex items-center gap-2">
                                <IoLocationSharp className="text-green-900" />
                                <h1 className="text-gray-400">{pres.country}</h1>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-[20px] text-green-900">{pres.cost}</span>/<span className="text-gray-400">Trip</span>
                            </div>

                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Card