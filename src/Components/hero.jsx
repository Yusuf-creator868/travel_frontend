import React from "react";
import main from "../assets/main.jpg"
import man1 from "../assets/man1.jpg"
import man2 from "../assets/man2.jpg"
import women from "../assets/women1.jpg"
import { Link } from 'react-router-dom'

export default function Hero() {


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={main}
        alt="Forest"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 text-white z-10">
        <h1 className="text-2xl font-semibold tracking-wide">
          DOLANAN
        </h1>

        <div className="hidden md:flex space-x-10 text-lg">
          <a onClick={() => scrollToSection("home")} className="hover:text-gray-300 transition cursor-pointer">Home</a>
          <a onClick={() => scrollToSection("destination")} className="hover:text-gray-300 transition cursor-pointer">Destination</a>
          <a onClick={() => scrollToSection("tour")} className="hover:text-gray-300 transition cursor-pointer">Tour</a>
          <a onClick={() => scrollToSection("contact")} className="hover:text-gray-300 transition cursor-pointer">Contact</a>
        </div>

        <a href="/register" className="bg-white text-black px-6 py-2 rounded-full font-medium cursor-pointer hover:bg-gray-200 transition">
          
            Register Now
         
        </a>
      </div>

      {/* Hero Content */}
      <div className="absolute z-10 flex flex-col justify-center h-full px-10 text-white max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          Overseas <br />
          Holiday <br />
          Solutions.
        </h2>

        <a href='login' className="mt-10 bg-white text-black px-8 py-4 rounded-full w-fit font-medium cursor-pointer hover:bg-gray-200 transition">
          Get Started
        </a>
      </div>


      {/* Bottom Info */}
      <div className="absolute bottom-0 w-full flex flex-col md:flex-row md:items-center md:justify-between gap-10 px-10 py-6">

        <div className="flex gap-5">
          <div className="flex -space-x-3">
            <img
              src={man1}
              alt=""
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src={man2}
              alt=""
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src={women}
              alt=""
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>

          <div className="text-gray-100">
            <p className="text-sm">Booked by over</p>
            <p className="font-semibold">10K+ people</p>
          </div>

        </div>


        {/* Tags */}
        <div className="space-x-3">
          {["Event", "Tradition", "Nature"].map((tag) => (
            <span
              key={tag}
              className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}