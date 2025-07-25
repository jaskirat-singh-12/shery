import { motion, useAnimate, useAnimation } from "framer-motion";
import React, { useState } from "react";
import gsap from "gsap"
const NewCollection = () => {
  const card = [useAnimation(), useAnimation()]

  const handleHover = (index)=>{
    card[index].start({y: "0"})
  }
  const handleHoverEnd = (index)=>{
    card[index].start({y: "100%"})
  }
  
  return (
   
      <div
      data-scroll
      data-scroll-speed="-.4"
      className="w-full py-15 text-white bg-[#391f0d] h-screen mt-20"
      
      >
        <div>
          <h1 className="text-6xl tracking-tight px-20">Features</h1>
        </div>

        <div className="px-20 py-10">
          <div 
          
          className="cards  w-full flex gap-11 mt-10 ">
            <motion.div 
            
             onHoverStart={()=>{
              handleHover(0)
             }}
             onHoverEnd={()=>{
              handleHoverEnd(0)
             }}
            className="cardcontainer relative w-1/2 h-[60vh] ">
              <h1 
              className="absolute text-6xl font-bold left-full -translate-x-1/2 top-1/2 text-white -translate-y-1/2 leading-none  flex overflow-hidden z-[8] ">
                {"Airborn".split("").map((item, index) => (
                  <motion.span initial={{y:"100%"}} animate= {card[0] }
                  transition={{ease: [0.7, 0, 0.84, 0], delay: index * 0.4 }}
                  
                   className="inline-block">
                  {item}</motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-2xl overflow-hidden ">
                <img src="/collect-3.png" />
              </div>

            </motion.div>
            <motion.div 
            onHoverStart={()=>{
              handleHover(1)
             }}
             onHoverEnd={()=>{
              handleHoverEnd(1)
             }}
            className="cardcontainer relative w-1/2 h-[60vh] ">
              <h1 className="absolute text-6xl font-bold right-full translate-x-1/2 top-1/2 text-white -translate-y-1/2 leading-none  flex overflow-hidden z-[8] ">
                {"Volt".split("").map((item, index) => (
                   <motion.span initial={{y:"100%"}} animate= {card[1] }
                  transition={{ease: [0.7, 0, 0.84, 0], delay: index * 0.4 }}
                  
                   className="inline-block">
                  {item}</motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-2xl overflow-hidden ">
                <img src="/collect-4.png" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default NewCollection;
