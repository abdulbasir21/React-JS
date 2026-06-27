import React from "react";
import { SERVICES_CONTENT } from "../lib/index.js";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-neutral-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🏷️ Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Our Signature Services
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            From kitchens that inspire to bathrooms that relax, we transform
            every corner of your home into a haven of beauty and comfort.
          </p>
        </div>

        {/* 📜 Services List */}
        <div className="space-y-20">
          {SERVICES_CONTENT.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              {/* 🖼️ Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* 🧾 Text */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
