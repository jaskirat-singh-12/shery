import React from 'react'
import logo from "/logo.png";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/30 
      border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
       <NavLink to={"/"}> <img src={logo} className='h-8 w-6 ' /> </NavLink>
        <ul className="flex space-x-6 text-white font-medium">
          <li><NavLink to={"/about"} className="hover:text-gray-300">About</NavLink></li>
          <li><NavLink to={"/"} className="hover:text-gray-300">Home</NavLink></li>
          <li><NavLink to={"/about"} className="hover:text-gray-300">Shop</NavLink></li>
          <li><NavLink to={"/mainpage"} className="hover:text-gray-300">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Nav
