"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageIcon from "@/public/Hero/Icons/empty-image.svg";
import { Users } from "./Users";

export const ImageConversionHero = () => {
  return (
    <>
      <header className="flex flex-col items-center justify-center">
        <section className="md:max-w-[1440px] w-full flex flex-col md:items-center md:justify-center bg-primary-faq py-[80px] pt-[50px] md:mt-0 mt-[30px] bg-gradient-to-b from-white to-[#FEEEFF] md:min-h-[100vh]">
          <div className="mt-[100px] px-[24px]">
            <div className="md:w-[850px] m-auto mb-[16px]">
              <h1 className="text-[28px] md:text-[48px] leading-[33.89px] md:leading-[58px] font-bold text-[#101010] text-center">
                Instant Video Magic: Convert Images to Videos{" "}
                <span className="text-[#F97316]">Effortlessly</span>
              </h1>
            </div>
            <div className="md:w-[750px] m-auto mb-[10px]">
              <p className="text-[14px] md:text-[20px] leading-[21px] md:leading-[44px] text-center text-[#1f1f1f]">
                Instantly convert your text image to videos using Converge’s AI
                text to video generator.
              </p>
            </div>
            <Users />
            <div className="md:w-[540px] mx-auto mt-[40px] text-center">
              <div className="w-full h-[240px] border-[1px] rounded-[16px] border-dashed border-[#CBD5E1] flex flex-col items-center justify-center cursor-pointer">
                <Image
                  src={ImageIcon}
                  height={96}
                  width={96}
                  alt="Upload image"
                  className="h-[96px] w-[96px]"
                />
                <p className="text-[#030712] mt-[8px] text-[28px] font-[600] leading-[36px]">
                  Upload a file
                </p>
                <p className="text-[#4B4B4B] font-normal leading-[28px]">
                  Click to browse or drag and drop a file here
                </p>
                <p className="text-[#CACACA]">(PNG, JPG, WEBM)</p>
              </div>

              <Button className="bg-[#F97316] px-[16px] py-[8px] text-[#FFFAF6] text-[18px] font-bold w-full h-[60px] md:w-[300px] md:h-[60px] rounded-[6px] mt-[24px] hover:bg-[#FBA163] transition duration-300 disabled:bg-[#FEF1E8] focus:bg-[#B15210]">
                Proceed
              </Button>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};
