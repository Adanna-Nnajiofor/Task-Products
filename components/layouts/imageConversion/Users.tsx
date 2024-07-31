import Image from "next/image";

const userImages = [
  "/Hero/Profiles/Profile1.svg",
  "/Hero/Profiles/Profile2.svg",
  "/Hero/Profiles/Profile3.svg",
  "/Hero/Profiles/Profile1.svg",
  "/Hero/Profiles/Profile2.svg",
  "/Hero/Profiles/Profile3.svg",
];

export const Users = () => {
  return (
    <>
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
                <Image
                  src={src}
                  width={31}
                  height={31}
                  alt={`user ${index + 1}`}
                  className="w-full h-full rounded-full h-[31px] w-[31px]"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="font-manrope text-[12px] font-medium leading-[16.2px] text-left text-[#1F1F1F] ml-24">
          Loved by 12,000 users
        </p>
      </div>
    </>
  );
};
