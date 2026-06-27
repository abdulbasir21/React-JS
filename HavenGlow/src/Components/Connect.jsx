import React from "react";
import { CONTACT_INFO } from "../lib/index.js";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Connect = () => {
  return (
    <section id="connect" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* 🏷️ Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Connect With Us
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {CONTACT_INFO.text}
          </p>
        </div>

        {/* 📞 Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-12">
          <div className="flex flex-col items-center">
            <MdPhone className="text-3xl text-neutral-700 mb-3" />
            <h4 className="font-semibold text-neutral-800">
              {CONTACT_INFO.phone.label}
            </h4>
            <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
          </div>

          <div className="flex flex-col items-center">
            <MdEmail className="text-3xl text-neutral-700 mb-3" />
            <h4 className="font-semibold text-neutral-800">
              {CONTACT_INFO.email.label}
            </h4>
            <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
          </div>

          <div className="flex flex-col items-center">
            <MdLocationOn className="text-3xl text-neutral-700 mb-3" />
            <h4 className="font-semibold text-neutral-800">
              {CONTACT_INFO.address.label}
            </h4>
            <p className="text-neutral-600 text-sm max-w-[200px]">
              {CONTACT_INFO.address.value}
            </p>
          </div>
        </div>

        {/* 🌐 Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            className="text-neutral-600 hover:text-neutral-800 transition-colors text-xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-neutral-600 hover:text-neutral-800 transition-colors text-xl"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-neutral-600 hover:text-neutral-800 transition-colors text-xl"
          >
            <FaInstagram />
          </a>
        </div>

        {/* ⚖️ Footer Line */}
        <div className="border-t border-neutral-200 pt-4 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} HavenGlow. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Connect;
