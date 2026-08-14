// ServicesRocketTracker.jsx

"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { IoRocketOutline } from "react-icons/io5";

export const ServicesRocketTracker = ({ total, activeIndex, containerRef }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const previous = scrollYProgress.getPrevious() ?? 0;
    const diff = latest - previous;

    if (Math.abs(diff) > 0.0005) {
      if (diff > 0) {
        setIsScrollingDown(true);
      } else if (diff < 0) {
        setIsScrollingDown(false);
      }
    }
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  const desktopProgressHeight = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"],
  );

  const desktopRocketTop = useTransform(smoothProgress, [0, 1], ["6%", "94%"]);
  const mobileRocketLeft = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* DESKTOP (Con animación de aparición de izquierda a derecha) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="hidden lg:flex flex-col items-center justify-between relative w-16 h-[500px] py-4 select-none"
      >
        {/* TRACK */}
        <div className="absolute top-8 bottom-8 w-0.5 bg-zinc-800/80 rounded-full overflow-hidden">
          <motion.div
            style={{ height: desktopProgressHeight }}
            className="w-full bg-linear-to-b from-indigo-500 via-indigo-400 to-indigo-600 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
          />
        </div>

        {/* NUMBERS */}
        {Array.from({ length: total }).map((_, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={idx}
              className="relative flex items-center justify-center z-10"
            >
              <span
                className={`text-[11px] font-mono transition-all duration-300 px-2.5 py-1 rounded-md ${
                  isActive
                    ? "text-indigo-200 bg-indigo-950/90 border border-indigo-500/50 font-semibold shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                    : "text-zinc-600 bg-zinc-950/60"
                }`}
              >
                0{idx + 1}
              </span>
            </div>
          );
        })}

        {/* ROCKET */}
        <motion.div
          style={{ top: desktopRocketTop }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-9 h-9 rounded-full bg-indigo-500/40 blur-md animate-pulse" />

            <div className="flex items-center gap-1.5 bg-zinc-950 border border-indigo-500/60 text-indigo-400 px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] backdrop-blur-md">
              <motion.div
                animate={{ rotate: isScrollingDown ? 135 : -45 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <IoRocketOutline className="w-4 h-4 text-indigo-200" />
              </motion.div>

              <span className="text-[10px] font-mono font-bold tracking-wider">
                LIVE
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* MOBILE (Con animación de aparición de abajo/izquierda) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 h-20 bg-zinc-950/85 backdrop-blur-xl lg:hidden border-t border-white/10 px-6 py-4 flex items-center justify-center select-none shadow-[0_-15px_40px_rgba(0,0,0,0.5)]"
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-2">
          <div className="relative w-full h-0.75 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.7)]"
              style={{ originX: 0, scaleX: smoothProgress }}
            />
          </div>

          <div className="relative w-full flex-1 flex items-center justify-center px-4">
            <motion.div
              style={{ left: mobileRocketLeft }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 pointer-events-none"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-8 h-8 rounded-full bg-indigo-500/40 blur-md animate-pulse" />

                <div className="flex items-center gap-2 bg-zinc-950 border border-indigo-500/60 text-indigo-400 px-3.5 py-1.5 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] backdrop-blur-md">
                  <motion.div
                    animate={{ rotate: isScrollingDown ? 45 : -135 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <IoRocketOutline className="w-4 h-4 text-indigo-200" />
                  </motion.div>

                  <div className="flex flex-col items-center leading-none">
                    <span className="text-[10px] font-mono font-bold tracking-wider">
                      LIVE
                    </span>

                    <span className="text-[9px] font-mono text-indigo-300">
                      0{activeIndex + 1}/{total}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
