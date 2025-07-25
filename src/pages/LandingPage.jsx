import React from "react";
import jordan from "/jordan-3.png";
import Sliding from "../components/Sliding";
import About from "./About";
import NewCollection from "../components/NewCollection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ShoeModel from "../components/ShoeModel";
import Aurora from "../Lightning/Background/Aurora";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* Aurora Background */}
       <section className="relative min-h-screen w-full overflow-hidden">
        {/* Aurora background scoped only here */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>


      {/* Foreground Content */}
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.9"
        className="relative w-full h-full flex pt-10 pb-50 font-['Montserrat-900']"
      >
        <div className="textstructure absolute mt-30 px-30 text-white w-2/3 z-20">
          {["Push boundaries.", "Break limits", "Just Do It."].map(
            (item, index) => (
              <div className="marker" key={index}>
                <div className="w-fit flex">
                  {index === 1 && (
                    <motion.img
                      initial={{ width: 0 }}
                      animate={{ width: "7vw" }}
                      transition={{ ease: [0.83, 0, 0.17, 1], duration: 1 }}
                      src={jordan}
                      className="w-[7vw] h-[5vw] mt-5 rounded-2xl object-cover pt-1"
                    />
                  )}
                  <h1 className="flex text-[5vw] items-center font-bold uppercase leading-[7vw] tracking-tight">
                    {item}
                  </h1>
                </div>
              </div>
            )
          )}
        </div>
        <ShoeModel />
      </div>
      </section>

      {/* Other Sections */}
      <Sliding />
      <About />
      <NewCollection />
      <Footer />
    </div>
  );
};

export default LandingPage;
