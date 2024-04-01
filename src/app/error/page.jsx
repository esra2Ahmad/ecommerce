import AboveBar from "@/pagesComponents/AboveBar";
import BottomNavBar from "@/pagesComponents/BottomNavBar";
import List from "@/pagesComponents/List";
import Abovefooter from "@/pagesComponents/AboveFooter";
import Bottomfooter from "@/pagesComponents/Bottomfooter";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <AboveBar />
      <BottomNavBar />
      <div className="h-[286px]  w-full   bg-medviolet mt-10 mb-[124px]">
        <div className="max-w-[1140px] mx-auto px-10 flex flex-col  gap-2 ">
          <h1 className=" text-dark  font-bold  text-[36px]  leading-normal mt-[75px]">
            404 Not Found
          </h1>
          <div className="flex flex-row gap-2">
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Home .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Pages .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              404 Not Found
            </p>
          </div>
        </div>
      </div>
      <div className="flex  flex-col gap-4 justify-center items-center">
        <Image
          src="/images/Group 123.png"
          width={800}
          height={800}
          alt="error"
        />
        <button className="bg-pink w-[157px] h-[40px] text-white ml-3 font-semibold text-[16px] font-josefin ">
          <Link href="/#">Back To Home</Link>
        </button>
      </div>
      <div className=" mt-48">
        <List />
        <Abovefooter />
        <Bottomfooter />
      </div>
    </div>
  );
};

export default page;
