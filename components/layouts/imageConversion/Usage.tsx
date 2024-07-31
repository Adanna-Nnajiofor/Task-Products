"use client";
import Image from "next/image";
import step1 from "@/public/Hero/Icons/howToStep1.svg";
import step2 from "@/public/Hero/Icons/howToStep2.svg";
import step3 from "@/public/Hero/Icons/howToStep3.svg";

export const ConversionUsage = () => {
  return (
    <>
      <section className="flex flex-col md:items-center md:justify-center bg-primary-faq md:py-[80px] py-[50px] pt-[50px] mt-0">
        <div className="md:mb-[64px] mb-[40px]">
          <h4 className="text-[#1F1F1F] text-[24px] md:text-[40px] font-[500] leading-[32.78px] md:leading-[54.64px] text-center px-[24px] w-[70%] md:w-full m-auto">
            How To convert Image To Video
          </h4>
          <p className="text-[#333333] text-[18px] leading-[24.3px] text-center px-[24px]">
            To transform your image to videos, follow these three simple texts.
          </p>
        </div>

        <div className="lg:max-w-[1000px] md:max-w-[800px] w-full px-[24px]">
          <div className="w-auto flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[90px] items-start">
            <div className="w-auto gap-[16px] bg-white flex flex-col">
              <div className="w-full flex flex-col items-start">
                <Image
                  src={step1}
                  alt={`transcribe step 1`}
                  className="md:w-[335px] h-[250px]"
                />
                <div className="w-full flex-1 items-center text-center mt-[18px]">
                  <h2 className="text-[20px] font-bold leading-[30px] text-[#F97316] ">
                    1. Input Text Script
                  </h2>
                  <p className="font-normal leading-[20px] text-[#1F1F1F]">
                    Easily input your text script
                  </p>
                </div>
              </div>
            </div>

            <div className="w-auto gap-[16px] bg-white flex flex-col">
              <div className="w-full flex flex-col items-start">
                <Image
                  src={step2}
                  alt={`transcribe step 2`}
                  className="md:w-[335px] h-[250px]"
                />
                <div className="w-full flex-1 items-start mt-[18px]">
                  <h2 className="text-[20px] font-bold leading-[30px] text-[#F97316] text-center">
                    2. Upload Image
                  </h2>
                  <p className="font-normal leading-[20px] text-[#1F1F1F] text-center">
                    Select the image you wish to convert. We accept all image
                    file formats such as PNG, JPEG, TIFF.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-auto gap-[16px] bg-white flex flex-col">
              <div className="w-full flex flex-col items-start">
                <Image
                  src={step3}
                  alt={`transcribe step 3`}
                  className="md:w-[335px] h-[250px]"
                />
                <div className="w-full flex-1 items-start mt-[18px]">
                  <h2 className="text-[20px] font-bold leading-[30px] text-[#F97316] text-center">
                    3. Download
                  </h2>
                  <p className="font-normal leading-[20px] text-[#1F1F1F] text-center">
                    After generating, save and export your video in the desired
                    format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
