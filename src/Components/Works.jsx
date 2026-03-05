import React from "react";
import { Search, MessageSquare, Zap, Map } from "lucide-react";
import worksimg from "../assets/works.webp"

const steps = [
  {
    icon: <Search size={20} />,
    title: "Find your destination",
    desc: "Embark on a journey to discover your dream destination, where adventure and relaxation await.",
  },
  {
    icon: <MessageSquare size={20} />,
    title: "Book a ticket",
    desc: "Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform.",
  },
  {
    icon: <Zap size={20} />,
    title: "Make payment",
    desc: "We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process.",
  },
  {
    icon: <Map size={20} />,
    title: "Explore destination",
    desc: "You'll be immersed in a captivating tapestry of sights, sounds and tastes as you explore.",
  },
];

export default function TicketProcess() {
  return (
    <section className="w-full bg-[#f6f6f4] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="w-full">
          <img
            src={worksimg}
            alt="mountain"
            className="w-full h-[700px] md:h-[700px] object-cover rounded-3xl"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-2xl tracking-widest text-green-950 mb-3 uppercase">
            How it works
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold mb-10 leading-tight">
            Ticket ordering process
          </h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl text-gray-700">
                  {step.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}