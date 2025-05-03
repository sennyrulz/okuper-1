// src/components/Banner.jsx or Banner.tsx
import Image from "next/image";
import Banner1 from "../../components/bannerIndex/Banner_2.png";
import Model1 from "../bannerIndex/bannerboy.png";
import Icon from "../../../public/houseIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Banner() {
  return (
    <div className="relative  w-full overflow-visible bg-white px-10 md:px-0 mb-10 md:mb-8 z-10">
      {/* Model Image */}
      <div className="absolute bottom-24 left-[33%] transform -translate-x-1/2 z-30 hidden md:block">
        <Image
          src={Model1}
          alt="bannerModel"
          className="h-[537px] w-auto object-contain"
        />
      </div>

      <div className="relative w-full min-h-[350px] md:h-[480px] ">
        {/* Background Image */}
        <Image
          src={Banner1}
          alt="Banner1"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* Support Icon */}
        <div className="absolute top-10 right-4 md:top-10 md:right-10 h-12 w-12 md:h-16 md:w-16 bg-amber-600 rounded-full animate-bounce z-30 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faHeadset}
            className="text-white text-2xl md:text-4xl"
          />
        </div>

        {/* Content Over Banner */}
        <div className="relative md:absolute md:inset-0 z-20 flex flex-col items-center md:items-start justify-center px-8 md:px-4 py-8 md:py-0 md:ml-[60%] text-white md:mt-[-80px] text-center md:text-left">
          <Image
            className="self-start mb-2 md:mb-0"
            src={Icon}
            alt="houseIcon"
            width={60}
            height={65}
          />
          <h1 className="text-2xl md:text-4xl font-light mt-4 md:mt-8">
            We got you covered
          </h1>
          <h3 className="text-sm md:text-lg font-light mt-2">
            The Nigerian rental market has become tainted by the <br />
            greed of middlemen, who often charge exorbitant fees.
          </h3>

          {/* Buttons */}
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
            <button className="bg-[#0E1D48] text-white px-4 py-2 md:px-8 md:py-3 rounded-md text-sm md:text-base hover:bg-white hover:text-[#0E1D48] transition">
              Got a vacant home?
            </button>
            <button className="bg-white text-[#0E1D48] px-4 py-2 md:px-8 md:py-3 rounded-md text-sm md:text-base hover:bg-gray-300 transition">
              Looking for a home?
            </button>
          </div>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="relative z-30 md:top-100 md:flex md:flex-row md:gap-6 md:px-0 py-0 flex-row lg:top-0 justify-center gap-8 mt-[-60px] px-4 pb-0">
        {[
          "Background Check required for home owners and tenants.",
          "Property ratings by tenants and flagging of suspicious accounts",
          "Tenants NIN identity, proof, financial record and occupation.",
          "All communications securely happens within the platform.",
        ].map((text, index) => (
          <div
            key={index}
            className="w-full md:w-[250px] bg-sky-100 rounded-xl px-9 py-8 shadow-md text-center md:text-left"
          >
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-[#0E1D48] text-lg md:text-xl mb-2"
            />
            <p className="font-semibold text-xs md:text-sm">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
