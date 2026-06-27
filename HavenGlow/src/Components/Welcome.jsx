import React from "react";
import heroImage from "../assets/hero.webp"; 

const Welcome = () => {
  return (
    <section className="relative bg-neutral-50 overflow-hidden pt-24 md:pt-32" id="welcome">
      {/* Hero Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 pb-16">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-800 leading-tight">
            Welcome to <span className="text-amber-500 drop-shadow-sm">HavenGlow</span>
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg max-w-lg mx-auto md:mx-0">
            Transform your home into a haven of warmth and elegance.
            We design spaces that glow with beauty, comfort, and style.
          </p>
          <div className="pt-4">
            <a
              href="#services"
              className="inline-block bg-amber-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-amber-600 transition-all duration-300"
            >
              Explore Our Work
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0">
          <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg">
            <img
              src={heroImage}
              alt="Decorated Living Room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-amber-400/20 blur-3xl rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Welcome;
