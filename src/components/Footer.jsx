import React from "react";

const Footer = () => {
  return (
    <div className=" text-white text-xl px-8 py-12 h-screen w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Nike Info */}
        <div>
          <img src="/collect.png" alt="Nike" className="w-16 h-7 bg-cover mb-4" />
          <p className="text-sm">
            Style. Speed. Strength.
            <br /> Engineered for performance.
          </p>
        </div>

        {/* Navigation */}
        <div>
      <h3 className="text-lg font-semibold mb-3">Explore</h3>
      <h5 className="text-md text-gray-300 hover:text-white cursor-pointer">Home</h5>
      <h5 className="text-md text-gray-300 hover:text-white cursor-pointer">Products</h5>
      <h5 className="text-md text-gray-300 hover:text-white cursor-pointer">Campaigns</h5>
      <h5 className="text-md text-gray-300 hover:text-white cursor-pointer">Contact</h5>
    </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <div className="flex space-x-3">{/* Add icons here */}</div>
        </div>

        {/* Developer Presence */}
        <div>
          <h3 className="font-semibold mb-2">Crafted By</h3>
          <p className="text-sm">Jaskirat Singh</p>
          <p className="text-xs">Frontend Dev | MERN</p>
          <div className="flex space-x-2 mt-2">
            <a href="https://github.com/..." target="_blank">
              GitHub
            </a>
            <a href="https://linkedin.com/in/..." target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10">
        © 2025 Nike. All Rights Reserved. | Built with 💙 by Jaskirat Singh
      </div>
    </div>
  );
};

export default Footer;
