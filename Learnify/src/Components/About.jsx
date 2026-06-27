import React from "react";
import BannerPng from "../assets/education.webp";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "./Hero";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about_us" className="bg-gray-50">
      <div className="container py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Banner Image */}
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng}
            alt="Learning illustration"
            className="w-[350px] md:max-w-[480px] object-cover drop-shadow-lg rounded-xl"
          />
        </div>

        {/* Banner Text */}
        <div className="text-center md:text-left space-y-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-wider text-secondary font-semibold"
          >
            Learn Anytime, Anywhere
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold leading-snug"
          >
            The World's Leading Online Learning Platform
          </motion.h1>

          <div className="flex flex-col gap-6">
            {/* Feature Item */}
            <motion.div
              variants={FadeUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex items-center gap-4 p-5 bg-white border rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-secondary to-purple-500 text-white text-xl">
                <FaBookReader />
              </div>
              <p className="text-lg font-medium">10,000+ Courses</p>
            </motion.div>

            <motion.div
              variants={FadeUp(0.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex items-center gap-4 p-5 bg-white border rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xl">
                <GrUserExpert />
              </div>
              <p className="text-lg font-medium">Expert Instruction</p>
            </motion.div>

            <motion.div
              variants={FadeUp(0.6)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex items-center gap-4 p-5 bg-white border rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-xl">
                <MdOutlineAccessTime />
              </div>
              <p className="text-lg font-medium">Lifetime Access</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
