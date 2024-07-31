type FeaturesType = {
  header: string;
  description: string;
};

const features: Array<FeaturesType> = [
  {
    header: "Upload Image",
    description:
      "Our AI technology ensures high accuracy in transcriptions, capturing every word spoken in the video.",
  },
  {
    header: "Add Music",
    description:
      "Enhance your videos by adding background music, providing a complete audio-visual experience.",
  },
  {
    header: "Download",
    description:
      "Easily download your videos in various formats and resolutions, suitable for different platforms and purposes.",
  },
  {
    header: "Select Template",
    description:
      "Choose from a variety of templates to style your videos, making them visually engaging and tailored to your needs.",
  },
  {
    header: "Select Skin Tone",
    description:
      "Customize character animations within your video to match diverse skin tones, ensuring representation and inclusivity.",
  },
  {
    header: "Secure and Private",
    description:
      "All uploaded images and generated videos are handled with the highest standards of data security.",
  },
];

export const Features = () => {
  return (
    <section className="flex flex-col md:items-center md:justify-center bg-primary-faq md:py-[80px] py-[50px] pt-[50px] mt-0">
      <div className="md:mb-[36px] mb-[20px]">
        <h4 className="text-[#1F1F1F] text-[24px] md:text-[40px] font-[500] leading-[32.78px] md:leading-[54.64px] text-center px-[24px] w-[70%] md:w-full m-auto">
          Our Features
        </h4>
      </div>

      <div className="lg:max-w-[1000px] md:max-w-[800px] w-full px-[24px]">
        <div className="w-auto mx-6 flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[40px] items-start mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-auto py-[34px] px-[28px] gap-[16px] bg-white flex flex-col rounded-[32px] border-[1px] border-[#E1E1E1]"
            >
              <div className="w-full flex flex-col items-start">
                <div className="w-full flex-1 items-start">
                  <h2 className="text-[20px] font-bold leading-[30px] text-[#F97316] ">
                    {feature?.header}
                  </h2>
                  <p className="font-normal leading-[20px] text-[#1F1F1F] mt-[16px]">
                    {feature?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};
