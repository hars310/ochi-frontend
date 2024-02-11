import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";

function ReadyToStart() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div data-scroll data-scroll-speed="-.48"  className="w-full  bg-[#CDEA68] min-h-screen relative ">
      {/* Eyes container */}
      <div  className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div  className=" flex gap-10">
          <div data-scroll data-scroll-speed="0.1" className="w-[12vw] flex justify-center items-center h-[12vw] rounded-full bg-white">
            <div className="text-white w-2/3 h-2/3 flex justify-center items-center rounded-full bg-black relative">
              <div style={{ transform: `rotate(${rotate}deg)` }} className="line  p-1 w-full h-8  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
             
            </div>
          </div>
          <div data-scroll data-scroll-speed="0.1" className="w-[12vw] flex justify-center items-center h-[12vw] rounded-full bg-white">
            <div className="w-2/3 h-2/3 flex justify-center items-center rounded-full bg-black relative">
              <div style={{ transform: `rotate(${rotate}deg)` }} className="line p-1 w-full h-8  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pt-36 text-center">
        {["READY", "TO START", "THE PROJECT ?"].map((item, index) => (
          <div key={index} className="text-[12vw] tracking-tighter leading-none text-black font-bold">
            {item}
          </div>
        ))}
      </div>

      {/* Button section */}
      <div className="flex justify-center items-center text-center mt-10 py-8">
        <div className="flex flex-col justify-center">
          <div className="bg-zinc-800 font-semibold px-6 py-3  flex cursor-pointer items-center justify-between rounded-full">
            <h1 className="text-sm tracking-tighter">START THE PROJECT</h1>
            <FaCircle className="w-2" />
          </div>
          <span className="my-2 text-black">OR</span>
          <div className="bg-transparent mb-60 border-zinc-800 border-[1.3px] text-black font-semibold px-6 py-3  flex cursor-pointer items-center gap-6 rounded-full">
            <h1 className="text-sm tracking-tighter">HELLO@OCHI.DESIGN</h1>
            <FaCircle className="w-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyToStart;
