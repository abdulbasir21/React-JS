"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.jpg";
import { LINKS } from "../lib/index.js"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-50/80 backdrop-blur-lg border-b border-neutral-200 shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src={logo}
            alt="HavenGlow Logo"
            className="w-12 h-12 rounded-full object-cover shadow-md"
          />
          <span className="font-bold text-xl tracking-wide text-neutral-800">
            Haven<span className="text-amber-500">Glow</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {LINKS.map((item, index) => (
            <a
              key={index}
              href={item.link} 
              className="text-sm font-medium text-neutral-700 hover:text-amber-500 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-neutral-700"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-neutral-50 border-t border-neutral-200 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-3">
          {LINKS.map((item, index) => (
            <a
              key={index}
              href={item.link} 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-neutral-700 hover:text-amber-500 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
