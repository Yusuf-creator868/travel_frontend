import React from "react";
import indonesia from '../assets/indonesia.jpg'
import thailand from '../assets/thailand.avif'
import icland from '../assets/icland.webp'

const destinations = [
  {
    name: "Indonesia",
    image: indonesia,
  },
  {
    name: "Thailand",
    image: thailand,
  },
  {
    name: "Iceland",
    image: icland,
  },
];

const data = [
  {hero: "Name", text:"Bro", img: icland},
  {hero: "Country", text:"Tashkent", img: thailand},
  {hero: "USA", text:"America", img: indonesia},
]

export default function Tour() {
  return (
    <section id="tour" className="bg-gray-100 py-16 px-6 md:px-16">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
        
        <div className="max-w-2xl">
          <p className="text-sm text-gray-500 tracking-widest uppercase mb-4">
            Tour
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Come here and explore the beautiful places here.
          </h2>
        </div>

        <button className="mt-6 md:mt-0 bg-green-900 text-white px-6 py-3 rounded-full hover:bg-green-800 transition flex items-center gap-2 w-fit">
          Explore more
          <span>→</span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((place, index) => (
          <div key={index} className="group">
            
            {/* Image Card */}
            <div className="overflow-hidden rounded-3xl">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Bottom Info */}
            <div className="flex items-center justify-between mt-4">
              <h3 className="text-lg font-medium">
                {place.name}
              </h3>

              <button className="text-sm text-gray-600 hover:text-black flex items-center gap-1 cursor-pointer">
                SEE MORE <span>→</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}