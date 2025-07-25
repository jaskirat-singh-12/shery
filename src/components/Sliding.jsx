import { motion } from 'framer-motion'
import React from 'react'

const Sliding = () => {
  
  return (
    <div 
    data-scroll data-scroll-section data-scroll-speed=".2"
    className="relative w-full overflow-hidden border-t-2 border-b-3 pl-5 pt-20 pb-20  pr-30 border-zinc-300 bg-amber-950">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
      >
        <div className="flex">
          <h1 className="text-[10vw] leading-none font-bold uppercase text-white px-4">
            we are nike
          </h1>
          <h1 className="text-[10vw] leading-none font-bold uppercase text-white px-4">
            we are nike
          </h1>
          <h1 className="text-[10vw] leading-none font-bold uppercase text-white px-4">
            we are nike
          </h1>
          <h1 className="text-[10vw] leading-none font-bold uppercase text-white px-4">
            we are nike
          </h1>
        </div>

        
      </motion.div>
    </div>
  )
}

export default Sliding
