// import React from 'react'
import { FaCircle } from "react-icons/fa";
function About() {
  return (
    <div data-scroll data-scroll-speed="-.17" className="w-full min-h-screen py-16  bg-[#CDEA68] rounded-t-2xl">
      <div className="w-[90%] px-8">
        <h1 className="text-black text-5xl leading-[3.4rem] tracking-tighter">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to <span className=" border-b-[3px]  border-black">raise funds</span>,
          <span className="ml-2 border-b-[3px]  border-black">
            sell products
          </span>
          , <br />
          <span className="border-b-[3px]  border-black">
            explain complex ideas
          </span>
          , and
          <span className="border-b-[3px]  border-black">
            hire great people
          </span>
          .
        </h1>
      </div>
      <div className="border-t-[1.5px] border-b-[1.5px] mt-16 pb-12 flex flex-row text-black px-12 pt-4 border-zinc-400 w-full">
        <div className="w-[50%]">
          <h1>What you can expect:</h1>
        </div>
        <div className="w-[25%]">
          <p className="mb-4">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="w-[20%]"></div>
      </div>
      <div className="px-12 py-4 flex">
        <div className="w-[50%]">
          <h1 className="text-black text-5xl mb-4">Our approach:</h1>
          <div className="bg-zinc-800  px-8 py-4 w-fit flex  items-center gap-8 rounded-full">
            <h1 className="text-sm tracking-tighter">READ MORE</h1>{" "}
            <FaCircle className="w-2" />
          </div>
        </div>
        <div className="w-[50%] rounded-xl overflow-hidden">
          <img
            className=""
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
