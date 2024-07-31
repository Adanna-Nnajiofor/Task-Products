"use client";
import Link from "next/link";
import { DocumentConversionHero } from "@/components/layouts/pdfConversion/Hero";
import { ConversionUsage } from "@/components/layouts/imageConversion/Usage";
import { Features } from "@/components/layouts/imageConversion/Features";
import { FrequentQuestions } from "@/components/layouts/imageConversion/FAQ";
import { Products } from "@/components/layouts/imageConversion/Products";


const ImageConversion = () => {
  return (
    <>
      <DocumentConversionHero />

      {/* Intro */}
      <div></div>

      {/* Products */}
      <Products />
    </>
  );
};

export default ImageConversion;
