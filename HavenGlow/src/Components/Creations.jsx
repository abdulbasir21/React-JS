import React from "react";
import { PORTFOLIO_PROJECTS } from "../lib/index.js";

const Creations = () => {
  return (
    <section id="creations" className="py-20 bg-neutral-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/*  Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Our Creations
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore our signature design projects — blending comfort, elegance,
            and timeless style.
          </p>
        </div>

        {/* 🧱 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-2xl shadow-md"
            >
              {/*  Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/*  Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center text-neutral-50 p-6">
                <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                <p className="text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creations;
