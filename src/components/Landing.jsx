// import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

function Landing() {
  
  return (
    <div data-scroll data-scroll-speed="-.2" className="bg-zinc-900 w-full h-screen pt-2 ">
      <div className="textData  mt-36 px-20">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item,index) => {
          return <>
          <div className="masker">
          <div className="w-fit flex items-center">
           {index===1 &&
            <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ ease:[0.76,0,0.24,1], duration:1}} className="w-[10vw] mx-4 h-[5.5vw] top-[0.4vw] relative bg-red-400 rounded-lg ">
            </motion.div>
           }
            <h1 className="flex items-center text-[7.8vw] leading-[6.5vw]  tracking-tighter font-semibold">
          {item}
            </h1>
          </div>
          </div>
          </>
        })}
      </div>
      <div className="border-t-[1px] border-zinc-600 mt-24 flex justify-between items-center py-5 px-20">
      {
        ["For public and private companies","From the first pitch to IPO"].map((item)=>
        <>
        <p className="text-md font-light tracking-tight ">
            {item}
        </p>
        </>)
      }
      <div className="start flex gap-1">
        <div className="capitalize px-4 py-2 text-md border-[1.5px] border-zinc-700 rounded-full ">
            START THE PROJECT
        </div>
        <div className="capitalize flex items-center justify-center p-2 border-[1.5px] border-zinc-700 rounded-full ">
            <GoArrowUpRight className="text-2xl" />
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Landing;
