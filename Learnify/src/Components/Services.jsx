import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ServicesData = [
  { id: 1, title: "Web Apps", icon: <TbWorldWww />, delay: 0.2 },
  { id: 2, title: "Mobile Apps", icon: <CiMobile3 />, delay: 0.3 },
  { id: 3, title: "Software", icon: <RiComputerLine />, delay: 0.4 },
  { id: 4, title: "Happy Clients", icon: <IoMdHappy />, delay: 0.5 },
  { id: 5, title: "SEO Boost", icon: <IoPulseOutline />, delay: 0.6 },
  { id: 6, title: "Support", icon: <BiSupport />, delay: 0.7 },
];

const SlideLeft = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay, ease: "easeInOut" },
  },
});

const Services = () => {
  return (
    <section className="bg-gray-50" id="services">
      <div className="container pb-16 pt-20 text-center">
        <h2 className="text-4xl font-bold mb-3">Our Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          We provide modern solutions to help you build, grow, and scale your
          digital presence.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white border rounded-xl flex flex-col items-center justify-center p-6 hover:shadow-xl hover:scale-105 duration-300"
            >
              {/* Icon with colored circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-secondary to-purple-500 text-white text-3xl mb-4 shadow-md">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
