"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function StarterPage({ children }) {
  const [showStarter, setShowStarter] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowStarter(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative dark:bg-popover min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {showStarter ? (
          <motion.div
            key="starter"
            initial={{
              opacity: 0,
              scale: 0.6,
              rotateX: 55,
              rotateY: -25,
              y: 800,
              z: -200,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
              y: 0,
              z: 0,
              transition: {
                duration: 0.5,
                ease: [0.65, 0, 0.35, 1],
                type: "spring",
                stiffness: 160,
                damping: 12,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.6,
              rotateX: -55,
              rotateY: 25,
              y: -250,
              transition: {
                duration: 0.6,
                ease: [0.65, 0, 0.35, 1],
                type: "spring",
                stiffness: 100,
                damping: 18,
              },
            }}
            style={{
              perspective: 1400,
              transformStyle: "preserve-3d",
            }}
            className="z-50 absolute inset-0 flex flex-col justify-center items-center dark:bg-popover text-white"
          >
            {/* Background glow animation */}
            <motion.div
              className="absolute bg-black/20 dark:bg-white/30 blur-3xl rounded-full w-80 h-80"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Logo or text animation */}
            <div className="items-center gap-2">
              <motion.div className="relative w-35 md:w-50 lg:w-60 h-35 md:h-50 lg:h-60 cursor-pointer">
                {/* Main Logo (Static) */}
                <img
                  src="images/black-logo.png"
                  alt="Logo"
                  className="dark:hidden block z-10 relative shadow-md p-1 rounded-full w-full h-full object-contain"
                />
                <img
                  src="images/white-logo.png"
                  alt="Logo"
                  className="hidden dark:block z-10 relative shadow-md p-1 rounded-full w-full h-full object-contain"
                />

                {/* Glowing Circular Gradient Border */}
                <motion.div
                  className="absolute inset-0 rounded-full text-black dark:text-white"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, currentColor, currentColor, transparent)",
                    padding: "2px",
                    mask: "linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)",
                    maskComposite: "exclude",
                    filter: "drop-shadow(0 0 4px currentColor)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                  }}
                />
                {/* Animated & Gradient Text */}
                <motion.h1
                  className="mt-2 font-bold text-black text-md dark:text-white md:text-xl lg:text-2xl text-center"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  Hello World!!
                </motion.h1>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default StarterPage;
