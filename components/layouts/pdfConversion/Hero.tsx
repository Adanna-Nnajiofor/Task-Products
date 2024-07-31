"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Users } from "../imageConversion/Users";
import PdfIcon from "@/public/pdf/pdf-small-icon.svg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const DocumentConversionHero = () => {
  return (
    <>
      <header className="flex flex-col items-center justify-center">
        <section className="md:max-w-[1440px] w-full flex flex-col md:items-center md:justify-center bg-primary-faq pb-[80px] bg-gradient-to-b from-white to-[#FEF1E8] md:min-h-[100vh]">
          <div className="mt-[100px] px-[24px]">
            <div className="md:w-[850px] m-auto mb-[16px]">
              <h1 className="text-[28px] md:text-[48px] leading-[33.89px] md:leading-[58px] font-bold text-[#101010] text-center">
                Turn Lengthy Documents into{" "}
                <span className="block text-[#F97316]">
                  Bite-Sized Summaries!
                </span>
              </h1>
            </div>
            <div className="md:w-[750px] m-auto mb-[10px]">
              <p className="text-[14px] md:text-[20px] leading-[21px] md:leading-[44px] text-center text-[#1f1f1f]">
                Instantly summarize and transcribe into PDF{" "}
                <span className="text-[#F97316]">in seconds</span>
              </p>
            </div>

            <Users />

            <div className="md:w-[540px] mx-auto mt-[40px] text-center">
              <div className="w-full flex flex-col items-start justify-start">
                <div className="grid w-full items-left text-left gap-1.5">
                  <Label
                    htmlFor="link"
                    className="text-[#1F1F1F] text-[18px] leading-[28px] font-600"
                  >
                    Paste your YouTube link here
                  </Label>
                  <Input
                    type="url"
                    id="link"
                    placeholder="https://youtube.com/your-video-url"
                    className="h-[55px] bg-white py-[20px] px-[16px] border-[1px] rounded-[6px] border-[#CBD5E1] text-[18px] leading-[28px] text-[#1F1F1F]"
                  />
                </div>

                <p className="text-[#71717A] font-normal leading-[20px text-[16px] mt-[24px]">
                  Supported Summary Links:
                </p>
                <div className="flex mt-[16px]">
                  <Image src={PdfIcon} alt="pdf icon" height={20} width={20} />
                  <p className="text-[#71717A] text-[14px] leading-[16px] ml-[8px]">
                    PDF Files
                  </p>
                </div>
              </div>

              <Button className="bg-[#F97316] px-[16px] py-[8px] text-[#FFFAF6] text-[18px] font-bold w-full h-[60px] md:w-[300px] md:h-[60px] rounded-[6px] mt-[24px] hover:bg-[#FBA163] transition duration-300 disabled:bg-[#FEF1E8] focus:bg-[#B15210]">
                Regenerate Summary
              </Button>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};
