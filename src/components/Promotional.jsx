"use client";
import React from "react";
import Image from "next/image";

const Promotional = () => {
  return (
    <div className="w-full  h-[764px] bg-white bg-opacity-90 relative  inline-flex  mt-20">
      <div>
        <Image
          src="/images/image 32(1).png"
          width={387}
          height={387}
          alt="lamp"
          className=" absolute top-0 "
        />
      </div>
      <div className=" w-[1137px] h-full mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className=" flex flex-col justify-center items-start  absolute  mt-[200px] ml-[60px]">
          <p className="text-pink text-base font-bold leading-7">
            Best Furniture For Your Castle....
          </p>
          <h1 className="text-black text-[40px] font-bold tracking-wide">
            New Furniture Collection
            <br />
            Trends in 2020
          </h1>
          <p className="text-lightgray text-base font-bold leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in{" "}
            <br />
            est adipiscing in phasellus non in justo.
          </p>
          <button className="w-[163px] h-[50px] bg-pink rounded-sm text-white text-[17px] font-semibold tracking-tight mt-10">
            Shop Now
          </button>
        </div>
      </div>
      <div className="  ">
        <div className="w-[518px] h-[518px]  bg-lightpink bg-opacity-35 rounded-full absolute right-[50px] top-[59px] " />
        <div className="w-[544px] h-[540px]   bg-lightpink  bg-opacity-35 rounded-full absolute right-[92px] top-[70px] z-[1]" />
        <Image
          src="/images/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
          width={519}
          height={519}
          alt=""
          className="absolute right-[90px] top-[80px] z-10"
        />
        <div className="w-[136.56px] h-[138.49px] absolute right-[85px] top-[14px] flex justify-center items-startz-[10]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="139"
            height="140"
            viewBox="0 0 139 140"
            fill="none"
          >
            <path
              d="M39.665 132.813C-10.335 104.813 1.88843 82.5 3.38879 66.5C3.38879 56.9 26.8315 11.9793 35.6648 5.31264C41.1648 1.14598 58.8647 -3.68736 85.6647 10.3126C146.865 35.9126 141.498 79.3126 131.165 97.8126C123.665 118.479 94.8648 154.413 39.665 132.813Z"
              fill="#00C1FE"
              stroke="#00C1FE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="right-[33px] top-[30px] absolute text-white text-[35px] font-bold text-center">
            50%
            <br />
            off
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
