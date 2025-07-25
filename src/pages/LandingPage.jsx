import React, { useEffect, useRef } from "react";
import jordan from "/jordan-3.png";
import Sliding from "../components/Sliding";
import About from "./About";
import NewCollection from "../components/NewCollection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ShoeModel from "../components/ShoeModel";

const LandingPage = () => {

  return (
    <div>
      <div 
       data-scroll data-scroll-section data-scroll-speed="-.9"
      className="w-full h-full flex pt-10 pb-50 relative font-['Montserrat-900']">
        <div className="textstructure absolute mt-30 px-30 text-white w-2/3 z-20">
          {["Push boundaries.", "Break limits", "Just Do It."].map(
            (item, index) => {
              return (
                <div className="marker" key={index}>
                  <div className="w-fit flex">
                    {index === 1 && (
                      <motion.img
                        initial={{ width: 0 }}
                        animate={{ width: "7vw" }}
                        transition={{ ease: [0.83, 0, 0.17, 1], duration: 1 }}
                        src={jordan}
                        className="w-[7vw] h-[5vw] mt-5 rounded-2xl object-cover pt-1 "
                      />
                    )}

                    <h1 className="flex text-[5vw] items-center font-bold uppercase leading-[7vw] tracking-tight ">
                      {item}
                    </h1>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <ShoeModel />
      </div>
      <Sliding />
      <About />
      <NewCollection />
      <Footer />
    </div>
  );
};

export default LandingPage;

// Important horizontal sliding

// const galleryTrack = document.querySelector('.gallery-track');
//     if (galleryTrack && window.innerWidth > 768) {
//         gsap.to(galleryTrack, {
//             x: () => -(galleryTrack.scrollWidth - window.innerWidth + 100),
//             ease: "none",
//             scrollTrigger: {
//                 trigger: ".horizontal-gallery",
//                 pin: true,
//                 scrub: 1,
//                 end: () => "+=" + (galleryTrack.scrollWidth - window.innerWidth + 200),
//                 invalidateOnRefresh: true
//             }
//         });
//     }
