"use client";
import React from "react";

const GetStarted = () => {
  return (
    <section className="flex flex-col md:py-[92px] py-[30px] items-center justify-center bg-gradient-to-b from-white to-[#FEF1E8]">
      <div className="md:max-w-[767px] w-full m-auto text-center">
        <h3 className="text-orange text-[24px] md:text-[40px] md:leading-[54.6px] font-bold px-[36px] block md:hidden">
          Unlock the power of AI summarization today
        </h3>
        <h3 className="text-orange text-[24px] md:text-[40px] md:leading-[54.6px] font-bold hidden md:block">
          Unlock Your Content&apos;s Potential Now!
        </h3>
        <p className="text-[18px] leading-[24.3px] font-[500] text-[#333333] px-[12px] py-[16px]">
          Create, transform, and enhance all your content with powerful AI tools
          designed for creators, researchers, professionals, and educators.
        </p>
        <button className="h-[48px] px-[16px] py-[12px] rounded-[6px] bg-orange text-white text-[14px] leading-[24px] mt-[24px]">
          Get Started for free
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
