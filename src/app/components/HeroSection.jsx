"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          /* Use min-h instead of fixed h to keep it responsive */
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start min-h-[500px] lg:min-h-[600px]"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sphelele",
                1000,
                "A Full-Stack Engineer",
                1000,
                "A Java Developer",
                1000,
                "A React.js Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          
          {/* Use the color variable from your globals.css if you set it up */}
          <p className="text-slate-400 text-base sm:text-lg lg:mr-2 mb-6 lg:text-xl max-w-2xl">
            <strong className="block mb-2 text-white text-lg">Welcome To my Portfolio</strong>
            Hello My Name is Sphelele, and this is a collection of my accomplishments, skills, and expertise in the field of ICT. Browse through to discover my passion for software development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 hover:opacity-90 text-white text-center font-semibold transition-all"
            >
              Hire Me
            </Link>
            <Link
              href="/files/Sphelele's Resume.pdf" 
              className="p-[2px] inline-block w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-pink-500 mt-0"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3 text-center text-white">
                Download Resume
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-8 lg:mt-0 flex justify-center"
        >
          {/* Tailwind v4 optimized background circle */}
          <div className="rounded-full bg-neutral-900 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative shadow-2xl shadow-purple-500/20">
            <Image
              src="/images/hero-guy-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={350}
              priority // Important for Hero images!
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;