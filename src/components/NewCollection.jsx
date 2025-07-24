import React from "react";

const NewCollection = () => {
  return (
    <div className="w-full py-20 text-white">
      <div>
        <h1 className="text-6xl tracking-tight px-20">Features</h1>
      </div>

      <div className="px-20 py-10">
        <div className="cards  w-full flex gap-11 mt-10 ">
          <div className="cardcontainer relative w-1/2 h-[60vh] ">
            <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none text-4xl  z-[8] ">
              {"NIKE".split('').map((item, index) =>(
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden ">
              <img src="/collect-3.png" />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[60vh] 0 ">
          <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none text-4xl z-[8] ">
              
              {"NIKE".split("").map((item, index) =>(
                <span className="text-4xl">{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden ">
              <img src="/collect-4.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
