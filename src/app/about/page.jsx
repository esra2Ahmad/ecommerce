import AboveBar from "@/pagesComponents/AboveBar";
import BottomNavBar from "@/pagesComponents/BottomNavBar";
import List from "@/pagesComponents/List";
import Abovefooter from "@/pagesComponents/AboveFooter";
import Bottomfooter from "@/pagesComponents/Bottomfooter";
import React from "react";
import Link from "next/link";
import Gride from "@/components/Gride";
import { page1 } from "@/components/Data";
import TitleHeader from "@/components/TitleHeader";

const page = () => {
  return (
    <div>
      <div className="">
        <AboveBar />
        <BottomNavBar />
      </div>
      <div className="h-[286px]  w-full   bg-medviolet mt-10 mb-[124px]">
        <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4 flex flex-col  gap-2 ">
          <h1 className=" text-dark  font-bold  text-[36px]  leading-normal mt-[75px]">
            Shop Grid Default
          </h1>
          <div className="flex flex-row gap-2">
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Home .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Pages .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              ShopNow .
            </p>
          </div>
        </div>
      </div>
      <div className=" max-w-[1140px] mx-auto md:px-10 xl:pl-2 sm:px-2 ">
         <TitleHeader/>
         </div>
      <div className=" max-w-[1140px] mx-auto md:px-10 xl:px-2 sm:px-2 
    grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-[53px] pt-[44px]">
       {page1.map((detail, index) => (
          <Gride
          
            key={index}
            id={ detail.id}
            image={detail.image}
            title={detail.title}
            price={detail.price}
            disc={detail.disc}
            
          />
        ))}

      </div>

      <div className="pt-20">
        <List />

        <Abovefooter />
        <Bottomfooter />
      </div>
    </div>
  );
};

export default page;
