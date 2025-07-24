import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import gsap from "gsap";
import Lenis from "./hooks/UseLenis";
import Mainroutes from "./routes/Mainroutes";
import Lightning from "./Lightning/Lightning";
import FallingText from "./FallingText/FallingText";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [textKey, setTextKey] = useState("intro-text");
  const comp = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showText, setShowText] = useState(true);
  const [progress, setProgress] = useState(0);
  const [progressComplete, setProgressComplete] = useState(false);

  const [animationDone, setAnimationDone] = useState(false);

  Lenis();

  useEffect(() => {
  if (progressComplete) {
    // First, show the text and reset the key (to trigger falling)
    setShowText(true);
    setTextKey(prev => prev + 1);

    // Then, hide it after 2 seconds
    const timeout = setTimeout(() => {
      setShowText(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }
}, [progressComplete]);


  useEffect(() => {
  if (isLoading) {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setProgressComplete(true);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }
}, [isLoading]);


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          setAnimationDone(true); // signal animation is done
        },
      });

      // Slide in the #slider
      t1.from("#slider-left", {
        xPercent: -100,
        duration: 1.2,
      })
        .from("#slider-right", {
          xPercent: 100,
          duration: 1.2,
        })
        .add(() => {
          setShowText(true);
          }, "+=0.7")
        .to("#slider-left", {
          xPercent: -100,
          duration: 1.5,
          delay: 1,
        })
        .to("#slider-right", {
          xPercent: 100,
          duration: 1.5,
          delay: -1.5,
        })
        .set(["#slider-left", "#slider-right"], {
          display: "none",
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    if (animationDone && progressComplete) {
      setIsLoading(false);
    }
  }, [animationDone, progressComplete]);
  return (
    <div
      ref={comp}
      className="relative min-h-screen bg-[#2D033B] overflow-hidden"
    >
      {/* LEFT SLIDER */}
      <div
        id="slider-left"
        className="absolute top-0 left-0 w-1/2 h-screen bg-black z-40 overflow-hidden"
      >
        <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={0.8} />
      </div>

      {/* RIGHT SLIDER */}
      <div
        id="slider-right"
        className="absolute top-0 right-0 w-1/2 h-screen bg-black z-40 overflow-hidden"
      >
        <Lightning hue={220} xOffset={0} speed={0.8} intensity={1} size={1} />
      </div>

      {/* FALLING TEXT */}
      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="absolute top-0 left-0 w-full h-full flex text-white items-center justify-center z-[60] pointer-events-none"
          >
            <FallingText
            key={textKey}
              text={`Built for Performance. Made to Inspire.`}
              highlightWords={["Built", "Performance", "Inspire"]}
              highlightClass="highlighted"
              trigger="auto"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="4rem"
              mouseConstraintStiffness={0.9}
            />
          </motion.div>
        )}


      {isLoading && (
        <div className="fixed inset-0 z-[70] text-white flex items-start justify-start px-6 md:px-16 pt-[80vh] ">
          <div className="flex flex-col gap-2 items-start justify-start mt-8">
            <div className="text-lg md:text-2xl font-semibold animate-pulse">
              Loading...
            </div>
            <div className="w-44 md:w-64 h-2 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-500 transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-xs mt-1">{progress}%</div>
          </div>
        </div>
      )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      {!isLoading && (
        <div id="welcome" className="h-full w-full bg-[#2D033B]">
          <Nav />
          <Mainroutes />
        </div>
      )}
    </div>
  );
};

export default App;
