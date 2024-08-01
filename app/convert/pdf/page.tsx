"use client";
import Link from "next/link";
import { DocumentConversionHero } from "@/components/layouts/pdfConversion/Hero";
import { Products } from "@/components/layouts/imageConversion/Products";
import PDFIcon from "@/public/pdf/pdf-large-icon.svg";
import ShareIcon from "@/public/pdf/share-icon.svg";
import CopyIcon from "@/public/pdf/copy.icon.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ImageConversion = () => {
  return (
    <>
      <DocumentConversionHero />

      {/* Intro */}
      <section className="flex flex-col md:items-center md:justify-center bg-primary-faq md:py-[80px] py-[50px] pt-[50px] mt-0">
        <div className="lg:max-w-[1000px] md:max-w-[800px] w-full px-[24px]">
          <div className="w-auto mx-6 flex-wrap grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-[40px] items-center mt-8">
            <div className="w-auto gap-[16px] bg-white flex flex-col items-start rounded-[15px]">
              <div className="w-full flex flex-col items-center justify-center bg-[#EEEEEE] h-auto md:h-[300px] h-[300px] rounded-[15px]">
                <Image
                  src={PDFIcon}
                  alt="PDF Icon"
                  height={130}
                  width={130}
                  className="h-[130px] w-[130px]"
                />
              </div>
            </div>
            <div className="w-auto gap-[16px] flex flex-col">
              <div className="w-full flex flex-col items-start">
                <div className="w-full flex-1 items-start">
                  <h2 className="text-[32px] leading-[43.57px] font-bold leading-[30px] text-[#1F1F1F]">
                    Introduction to Figma
                  </h2>
                  <div className="mt-[20px]">
                    <p className="text-[#71717A] text-[18px] leading-[24.2px]">
                      Author
                    </p>
                    <p className="text-[#1F1F1F] text-[20px] leading-[29.05px] font-[600]">
                      Adi Purdila
                    </p>
                  </div>

                  <div className="mt-[20px]">
                    <p className="text-[#71717A] text-[18px] leading-[24.2px]">
                      Video Length
                    </p>
                    <p className="text-[#1F1F1F] text-[20px] leading-[29.05px] font-[600]">
                      03 mins 40 secs
                    </p>
                  </div>

                  <div className="mt-[20px]">
                    <p className="text-[#71717A] text-[18px] leading-[24.2px]">
                      Estimated Read Time
                    </p>
                    <p className="text-[#1F1F1F] text-[20px] leading-[29.05px] font-[600]">
                      01 mins 10 secs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="flex flex-col md:items-center md:justify-center bg-primary-faq md:py-[50px] py-[50px] pt-[50px] mt-0">
        <div className="lg:max-w-[1280px] md:max-w-full w-full px-[24px]">
          <div className="flex md:flex-row flex-col md:items-center items-start justify-between bg-[#FAFAFA] rounded-[20px] py-[27px] px-[32px]">
            <div className="flex items-center justify-between md:justify-start w-full md:w-[280px] gap-[12px] mb-[24px] md:mb-0">
              <span className="bg-[#F97316] py-[6px] px-[12px] rounded-[3px] text-white">
                Convert to text
              </span>
              <span>Summary</span>
            </div>

            <div className="flex items-center gap-[12px] justify-between md:justify-end w-full md:w-[280px]">
              <p className="flex items-center gap-[8px] text-[#F97316] text-[14px] cursor-pointer">
                <Image src={ShareIcon} alt="share icon" />
                Share
              </p>
              <Button className="bg-[#F97316] px-[16px] py-[14px] text-[#f5f5f5] text-[16px] font-normal h-[45px] md:h-[45px] rounded-[6px] hover:bg-[#FBA163] transition duration-300 disabled:bg-[#FEF1E8] focus:bg-[#B15210]">
                Save Summary
              </Button>
            </div>
          </div>

          <div className="bg-[#FAFAFA] py-[24px] px-[32px] flex flex-col gap-[10px] rounded-[20px] mt-[40px]">
            <div className="flex items-center justify-between">
              <Select>
                <SelectTrigger className="w-[170px] border-[#8E8E8E] bg-[#FAFAFA]">
                  <SelectValue placeholder="Translate - EN" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="EN">Translate - EN</SelectItem>
                    <SelectItem value="FR">Translate - FR</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Image src={CopyIcon} alt="copy icon" />
            </div>
            <div className="mt-[32px]">
              <p className="text-[#1F1F1F] leading-[24px]">
                This video summary dives into the world of sustainable
                architecture. It emphasizes the importance of using recycled
                materials in construction, even showcasing buildings made from
                repurposed shipping containers! Another interesting concept
                explored was living green walls, vertical gardens that not only
                enhance aesthetics but also help purify the air. The video packs
                a punch with valuable information in a short timeframe, making
                it a great resource for anyone interested in learning more about
                sustainable building practices.{" "}
              </p>

              <p className="text-[#1F1F1F] leading-[24px] mt-[24px]">
                This video summary dives into the world of sustainable
                architecture. It emphasizes the importance of using recycled
                materials in construction, even showcasing buildings made from
                repurposed shipping containers! Another interesting concept
                explored was living green walls, vertical gardens that not only
                enhance aesthetics but also help purify the air. The video packs
                a punch with valuable information in a short timeframe, making
                it a great resource for anyone interested in learning more about
                sustainable building practices. This video summary dives into.{" "}
              </p>
            </div>
            <div className="mt-[10px]">
              <p className="text-right text-[#71717A]">1500 words</p>
            </div>
          </div>
        </div>
      </section>
      {/* Products */}
      <Products />
    </>
  );
};

export default ImageConversion;
