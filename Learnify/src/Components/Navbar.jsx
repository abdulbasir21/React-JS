import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMenu = [
  { id: "home", title: "Start" },
  { id: "services", title: "Services" },
  { id: "about_us", title: "About" },
  { id: "contact_us", title: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // helper: handle click with delay to allow smooth scroll
  const handleLinkClick = () => {
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo */}
        <div>
          <h1 className="font-bold text-2xl cursor-pointer">
            Learnify
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                <a
                  href={`#${menu.id}`}
                  className="inline-block py-2 px-3 hover:text-secondary transition-colors"
                >
                  {menu.title}
                </a>
                {/* Hover dot */}
                <div className="w-2 h-2 bg-secondary absolute left-1/2 -translate-x-1/2 top-full mt-1 rounded-full hidden group-hover:block"></div>
              </li>
            ))}
            <li>
              <button className="primary-btn">Login</button>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="text-4xl focus:outline-none"
          >
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-white shadow-md rounded-lg mx-4 mt-2 overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-4">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={`#${menu.id}`}
                    className="block py-2 px-3 hover:text-secondary transition-colors"
                    onClick={handleLinkClick} // delay close
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <li>
                <button className="primary-btn w-full">Login</button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
