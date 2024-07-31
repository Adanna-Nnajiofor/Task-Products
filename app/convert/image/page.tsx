"use client";
import Link from "next/link";
import { ImageConversionHero } from "@/components/layouts/imageConversion/Hero";
import { ConversionUsage } from "@/components/layouts/imageConversion/Usage";
import { Features } from "@/components/layouts/imageConversion/Features";
import { FrequentQuestions } from "@/components/layouts/imageConversion/FAQ";
import { Products } from "@/components/layouts/imageConversion/Products";


const ImageConversion = () => {
  return (
    <>
      <ImageConversionHero />

      {/* How to use  */}
      <ConversionUsage />

      {/* Features */}
      <Features />

      {/* FAQ */}
      <FrequentQuestions />

      {/* Products */}
      <Products />

      <section className="flex flex-col md:items-center md:justify-center bg-primary-faq md:pb-[80px] pb-[50px] pt-0 mt-0">
        <div className="mb-[8px]">
          <h4 className="text-[#F97316] text-[24px] md:text-[40px] font-[500] leading-[32.78px] md:leading-[54.64px] text-center px-[24px] w-[70%] md:w-full m-auto">
            Transform your images into stunning videos with just a click
          </h4>
        </div>

        <div className="lg:max-w-[805px] md:max-w-[700px] w-full px-[24px] text-center">
          <p className="text-[#333333] text-[18px] leading-[24.3px] text-center mb-[40px]">
            Our Image to Video simplifies the process in three easy steps.
          </p>

          <Link href="#" className="bg-[#F97316] px-[82px] py-[18px] text-[#FFFAF6] text-[18px] font-bold rounded-[6px] hover:bg-[#FBA163] transition duration-300 disabled:bg-[#FEF1E8] focus:bg-[#B15210]">
            Get Started for Free
          </Link>
        </div>
      </section>
    </>
  );
};

export default ImageConversion;
