import { motion } from 'framer-motion'
import React from 'react'

const Sliding = () => {
  
  return (
    <div className='pt-10 w-full h-[50vh] bg-amber-950'>
    <div className='border-t-2 border-b-3 border-zinc-300 flex gap-10 overflow-hidden text-white'>
      <motion.h1 initial={{x:"100%"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[7vw] leading-none font-bold pt-7 uppercase'>we are nike</motion.h1>
      <motion.h1 initial={{x:"100%"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[7vw] leading-none font-bold pt-7 uppercase'>we are nike</motion.h1>
      <motion.h1 initial={{x:"100%"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[7vw] leading-none font-bold pt-7 uppercase'>we are nike</motion.h1>
    </div>
      
    </div>
  )
}

export default Sliding
