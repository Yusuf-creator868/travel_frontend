import React from "react";
import { Plus, Mail, Phone, Linkedin, Instagram, Facebook, Github } from "lucide-react";

export default function ExploreHero() {
  return (
    <section id="contact" className="relative w-full min-h-screen text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#1e2b08]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 md:px-16 py-16">

        {/* HERO TEXT */}
        <div className="text-center mt-10 md:mt-20 max-w-4xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-gray-200 mb-4">
            Experience
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Explore your favorite places <br className="hidden sm:block" />
            and book your tickets now
          </h1>

          <p className="text-gray-300 mb-8 text-sm md:text-base">
            Start planning your trip to bosnia and Herzegovina today!
          </p>

          <button className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
            Craft my trip
            <span className="bg-green-800 text-white rounded-full p-2">
              <Plus size={16} />
            </span>
          </button>
        </div>

        {/* FOOTER */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">DOLANAN</h2>
            <p className="text-gray-300 mb-6 max-w-sm">
              Don't miss out on our interesting promotions, please follow our social media so you don't miss out on other interesting information.
            </p>

            <div className="flex flex-col gap-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                dolananadoh@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                +387 555 666 000
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-4">LINKS</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Places</li>
              <li className="hover:text-white cursor-pointer">Experiences</li>
              <li className="hover:text-white cursor-pointer">How it work</li>
              <li className="hover:text-white cursor-pointer">Why us</li>
              <li className="hover:text-white cursor-pointer">Craft my trip</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="font-semibold mb-4">BASED IN</h3>

            <div className="space-y-3 text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                🇫🇷 Alexander, France
              </div>
              <div className="flex items-center gap-2">
                🇬🇧 Pikolo, ING
              </div>
            </div>

            <h3 className="font-semibold mb-4">FOLLOW</h3>

            <div className="flex gap-4">
              <Linkedin size={18} className="hover:text-white cursor-pointer" />
              <Instagram size={18} className="hover:text-white cursor-pointer" />
              <Facebook size={18} className="hover:text-white cursor-pointer" />
              <Github size={18} className="hover:text-white cursor-pointer" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}