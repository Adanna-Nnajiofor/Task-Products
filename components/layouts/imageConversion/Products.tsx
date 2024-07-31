import Link from "next/link";
import Image from "next/image";
import RightCaret from "@/public/Hero/Icons/right-caret.svg";

type ProductShowcase = {
  header: string;
  description: string;
  url?: string;
  imageSrc: string;
};

const products: Array<ProductShowcase> = [
  {
    imageSrc: "/Hero/Icons/text-icon.svg",
    header: "Text-to-Video Generator",
    description:
      "Transform your written content into engaging videos with animations and visuals in minutes.",
  },
  {
    imageSrc: "/Hero/Icons/video-icon.svg",
    header: " Image-to-Video Generator",
    description:
      "Convert your images into dynamic video content. Create captivating visual stories effortlessly.",
  },
  {
    imageSrc: "/Hero/Icons/audio-icon.svg",
    header: "Audio Transcriber",
    description:
      "Convert audio recordings into text effortlessly. Great for transcribing meetings, interviews, lectures.",
  },
  {
    imageSrc: "/Hero/Icons/youtube-icon.svg",
    header: "YouTube Summarizer",
    description:
      "Easily transcribe YouTube videos into text for subtitles, blog posts, or content summaries.",
  },
  {
    imageSrc: "/Hero/Icons/podcast-icon.svg",
    header: "Podcast Summarizer",
    description:
      "Turn lengthy audio into bite-sized highlights with our cutting-edge summarization tool!",
  },
  {
    imageSrc: "/Hero/Icons/pdf-icon.svg",
    header: "PDF Summarizer ",
    description:
      "Simplify dense PDFs into brief summaries. Quickly understand the main ideas of reports and articles.",
  },
];

export const Products = () => {
  return (
    <>
      <section className="flex flex-col md:items-center md:justify-center md:py-[80px] py-[50px] pt-[50px] mt-0">
        <div className="md:mb-[64px] mb-[40px]">
          <div className="text-center flex flex-col items-center justify-center">
            <h1 className="text-[24px] md:text-[40px] font-[500] leading-[32.78px] md:leading-[54.64px] text-center text-[#1F1F1F]">
              Explore Our Products
            </h1>
          </div>
          <div className="w-auto mx-6 flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]  lg:gap-[40px] items-start mt-8 max-w-[1280px]">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-auto p-[24px] gap-[8px] rounded-[16px] bg-[#FAFAFA] flex flex-col"
              >
                <div className="w-full flex flex-col items-start">
                  <Image
                    src={product.imageSrc}
                    alt={`Product ${index + 1}`}
                    className="w-[64px] h-[64px] object-cover ml-3"
                    height={64}
                    width={64}
                  />
                  <div className="w-full ml-4 flex-1 items-start mt-4">
                    <h2 className="text-[24px] font-bold leading-[29.05px] text-[#1F1F1F] ">
                      {product.header}
                    </h2>
                    <p className="text-[14px] font-medium leading-[16.94px] text-[#4B4B4B] mt-2">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center transition ease-out duration-300 group-hover:translate-y-[-10px]">
                      <Link
                        href="#"
                        className="transform transition text-[16px] font-semibold leading-[19.36px] text-[#F97316] flex gap-[8px] transition ease-out duration-300 group-hover:translate-x-[10px]"
                      >
                        Try it now
                        <Image
                          src={RightCaret}
                          alt="right caret"
                          height={16}
                          width={16}
                          className="transform transition ease-out duration-300 group-hover:translate-y-[-10px]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
