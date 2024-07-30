// components/Products.tsx
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const products = [
  {
    imageSrc: "/Text.png",
    h2Text: "Text-to-Video Generator",
    pText:
      "Transform your written content into engaging videos with animations and visuals in minutes.",
  },
  {
    imageSrc: "/Image.png",
    h2Text: " Image-to-Video Generator",
    pText:
      "Convert your images into dynamic video content. Create captivating visual stories effortlessly.",
  },
  {
    imageSrc: "/Video Document.png",
    h2Text: "Thumbnail Generator",
    pText:
      "Generate eye-catching thumbnails from your videos to enhance your content’s appeal instantly.",
  },
  {
    imageSrc: "/Youtube.png",
    h2Text: "YouTube Summarizer",
    pText:
      "Easily transcribe YouTube videos into text for subtitles, blog posts, or content summaries.",
  },
  {
    imageSrc: "/image 1752.png",
    h2Text: "Podcast Summarizer",
    pText:
      "Turn lengthy audio into bite-sized highlights with our cutting-edge summarization tool!",
  },
  {
    imageSrc: "/Pdf.png",
    h2Text: "PDF Summarizer ",
    pText:
      "Simplify dense PDFs into brief summaries. Quickly understand the main ideas of reports and articles.",
  },
  {
    imageSrc: "/image 1751.png",
    h2Text: "Audio Transcriber",
    pText:
      "Convert audio recordings into text effortlessly. Great for transcribing meetings, interviews, lectures.",
  },
];

const Products: React.FC = () => {
  console.log("Products component rendered");
  return (
    <section className="w-full  h-auto mt-[100px] mx-auto gap-[32px] flex flex-col items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="font-manrope text-[40px] font-bold leading-[54.64px] text-center text-[#1F1F1F]">
          Explore Our Products
        </h1>
      </div>
      <div className="w-auto mx-6 flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]  lg:gap-[40px] items-start mt-8 max-w-[1280px]">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-auto  h-auto lg:h-[242px] p-[24px] gap-[8px] rounded-[16px] bg-[#FAFAFA] flex flex-col"
          >
            <div className="w-full flex flex-col items-start">
              <img
                src={product.imageSrc}
                alt={`Product ${index + 1}`}
                className="w-[64px] h-[64px] object-cover ml-3"
              />
              <div className="w-full ml-4 flex-1 items-start mt-4">
                <h2 className="font-inter text-[24px] font-bold leading-[29.05px] text-[#1F1F1F] ">
                  {product.h2Text}
                </h2>
                <p className="font-inter text-[14px] font-medium leading-[16.94px] text-[#4B4B4B] mt-2">
                  {product.pText}
                </p>
                <div className="mt-4 flex items-center">
                  <p className="font-inter text-[16px] font-semibold leading-[19.36px] text-[#F97316]">
                    Try it now
                  </p>
                  <FaArrowRight className="ml-2 text-[#F97316] items-center mt-1 text-center" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
