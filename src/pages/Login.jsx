import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const NikeLogin = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-800 to-white flex flex-col items-center justify-center overflow-hidden p-4">
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side Shoe and Form */}
        <motion.div className="flex flex-col items-center justify-center gap-6 w-full max-w-md" variants={itemVariants}>
          <img
            src="/login2.png"
            alt="Nike Shoe High"
            className="w-full max-w-xs absolute mr-[50vw] mb-[15vw] rotate-45 object-contain drop-shadow-2xl"
          />
          <img
            src="/login.png"
            alt="Nike Shoe High"
            className="w-full max-w-xs absolute -mr-[50vw] mt-[45vh] -rotate-45 object-contain drop-shadow-2xl"
          />
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Hello !</h2>
            <h3 className="text-2xl font-semibold text-white">Welcome Back</h3>
          </div>
          <div className="w-full space-y-4">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
              />
              <span className="absolute right-4 top-3.5 cursor-pointer">👁️</span>
            </div>
            <p className="text-sm text-right text-gray-600 cursor-pointer hover:underline">Recover Password</p>
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold">Sign In</button>
            <div className="flex items-center justify-center space-x-4 pt-4">
              <button className="bg-white p-3 rounded-xl shadow-md">G</button>
              <button className="bg-white p-3 rounded-xl shadow-md">🐦</button>
              <button className="bg-white p-3 rounded-xl shadow-md">f</button>
            </div>
            <p className="text-sm text-center pt-4">
              Don’t Have an account ? <span className="font-bold cursor-pointer">Create Account!</span>
            </p>
          </div>
        </motion.div>

      
      </motion.div>
    </div>
  );
};


export default NikeLogin;
