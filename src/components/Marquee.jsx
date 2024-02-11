// import React from "react";
import { motion } from "framer-motion";
function Marquee() {
  return (
    <div data-scroll data-scroll-speed="0.07" className="w-full  py-20 bg-[#004D43] rounded-t-3xl rounded-b-none">
      <div className="text border-t-[1.4px] border-b-[1.4px] border-zinc-400 flex  overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear",duration:10,repeat: Infinity}} className="text-[24vw] leading-none tracking-tighter pt-10 -my-16 mb-1 font-bold pr-12">
          WE ARE OCHI
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear",duration:10,repeat: Infinity}} className="text-[22vw] leading-none tracking-tighter pt-10 -my-16 mb-1 font-bold pr-12">
          WE ARE OCHI
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear",duration:10,repeat: Infinity}} className="text-[22vw] leading-none tracking-tighter pt-10 -my-16 mb-1 font-bold pr-12 ">
          WE ARE OCHI
        </motion.h1>
        
      </div>
    </div>
  );
}

export default Marquee;
