import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface HeroProps {
  imgData: StaticImageData;
  alt: string;
  title: string;
}
const Hero: FC<HeroProps> = ({ imgData, alt, title }) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          className='object-cover'
          fill
          src={imgData}
          alt={alt}
        />
        <div className="absolute bg-gradient-to-r from-gray-900 inset-0"></div>
      </div>
      <div className="flex w-full h-full items-center justify-center">
        <h1 className="text-5xl text-white">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
