import React from "react";
import waterfall from '../assets/waterfall.jpg'
import beach from '../assets/beach.jpg'
import forest from '../assets/forest.jpg'
import fiji from '../assets/fiji.jpg'

export default function Explore() {


  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      
      {/* Header */}
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
            Explore
          </p>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-5">
        
        <div>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Our tailored destinations just for you
          </h2>
        </div>

        <div className="flex items-center">
          <p className="text-gray-500 max-w-md">
            Experience the difference with our exceptional and personalized
            service! We prioritize each customer's unique needs
          </p>
        </div>

      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Waterfall */}
        <Card
          title="Waterfall"
          image={waterfall}
        />

        {/* Beach */}
        <Card
          title="Beach"
          image={beach}
        />

        {/* Forest */}
        <Card
          title="Forest"
          image={forest}
        />

        {/* Mountain */}
        <Card
          title="Mountain"
          image={fiji}
        />

      </div>
    </section>
  );
}

function Card({ title, image }) {
  return (
    <div className="relative rounded-3xl overflow-hidden group">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[260px] md:h-[320px] object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
        <h3 className="text-lg md:text-xl font-medium">
          {title}
        </h3>

        <button className="bg-white text-black px-5 py-2 rounded-full text-sm cursor-pointer hover:bg-gray-200 transition">
          See Details
        </button>
      </div>

    </div>
  );
}