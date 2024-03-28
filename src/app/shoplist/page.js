import AboveBar from "@/pagesComponents/AboveBar";
import BottomNavBar from "@/pagesComponents/BottomNavBar";
import List from "@/pagesComponents/List";
import Abovefooter from "@/pagesComponents/AboveFooter";
import Bottomfooter from "@/pagesComponents/Bottomfooter";
import React from "react";
import Link from "next/link";
import ShopList from "@/components/ShopList";
import { shoplist } from "@/components/Data";
import TitleHeader from "@/components/TitleHeader";

const page = () => {
  return (
    <div>
      <div className="">
        <AboveBar />
        <BottomNavBar />
      </div>
      <div className="h-[286px]  w-full  mx-auto bg-medviolet mt-10 mb-[124px]">
        <div className="max-w-[1140px] mx-auto md:px-10 sm:px-2 px-4 flex flex-col  gap-2 ">
          <h1 className=" text-dark  font-bold  text-[36px]  leading-normal mt-[75px]">
          Shop List
          </h1>
          <div className="flex flex-row gap-2">
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Home .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Pages .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
            Shop List .
            </p>
          </div>
        </div>
      </div>
      <TitleHeader/>
      <div className=" flex flex-col gap-1 max-[1168px] mx-auto">
       {shoplist.map((detail, index) => (
          <ShopList
            key={index}
            image={detail.image}
            title={detail.title}
            price={detail.price}
            disc={detail.disc}
            discription={detail.discription}
            
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
