// components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  const userImages = [
    "/User2.png",
    "/User1.png",
    "/Photo1.png",
    "/Photo1.png",
    "/User1.png",
    "/Photo1.png",
  ];

  return (
    <section className="w-full  h-auto bg-gradient-to-b from-white to-[#FEF1E8] flex flex-col items-center justify-center px-4 md:px-8">
      <div className="relative top-[180px] gap-[24px] w-full lg:w-[1068px] flex flex-col items-center justify-center">
        <div className="gap-[16px] flex flex-col items-center">
          <h1 className="font-inter text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[58.09px] text-center text-[#101010]">
            Unlock the Power of{" "}
            <span className="text-[#F97316]">Your Content with AI</span>
          </h1>
          <p className="font-manrope text-[16px] md:text-[20px] font-medium leading-[24px] md:leading-[27.32px] text-center text-[#1F1F1F]">
            From text to video, audio to summaries, create engaging media in
            seconds.
          </p>
          <button className="w-[135px] h-[48px] px-[16px] py-[8px] rounded-[6px] bg-[#F97316] text-white">
            Get Started
          </button>
        </div>
        <div className="gap-[12px] flex items-center mx-auto justify-center">
          <div className="relative flex items-center justify-center">
            {userImages.map((src, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `${index * 15}px`,
                  zIndex: userImages.length - index,
                }}
              >
                <div className="w-[31px] h-[31px] rounded-full border border-white">
                  <img
                    src={src}
                    alt={`user ${index + 1}`}
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="font-manrope text-[12px] font-medium leading-[16.2px] text-left text-[#1F1F1F] ml-24">
            Loved by 12,000 users
          </p>
        </div>
      </div>
      <div className="w-full h-auto max-w-[986px] mt-[200px]  border-[#FFF9FF] ">
        <img
          src="/Uploaded video - Transcript 2.png"
          alt="Hero"
          className="w-full h-full rounded-[36px]"
        />
      </div>
    </section>
  );
};

export default Hero;
