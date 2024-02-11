import { useEffect, useState } from "react";

function Eyes() {
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
    <div  className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-0.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div  className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div data-scroll data-scroll-speed="0.2" className="w-[15vw] flex justify-center items-center h-[15vw] rounded-full bg-white">
            <div className="text-white w-2/3 h-2/3 flex justify-center items-center rounded-full bg-black">
              <div style={{ transform: `rotate(${rotate}deg)` }} className="line p-1 w-full h-8">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <div className="absolute flex justify-center items-center text-white text-lg ">
                PLAY
              </div>
            </div>
          </div>
          <div  data-scroll data-scroll-speed="0.2"className="w-[15vw] flex justify-center items-center h-[15vw] rounded-full bg-white">
            <div className="w-2/3 h-2/3 flex justify-center items-center rounded-full bg-black">
              <div style={{ transform: `rotate(${rotate}deg)` }} className="line p-1 w-full h-8">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <div className="absolute flex justify-center items-center text-white text-lg ">
                PLAY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
