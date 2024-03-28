import { NextFont } from "next/dist/compiled/@next/font";
import React from "react";
interface TitleProps {
  gerhaus: {
    className: any;
  };
}

const Title: React.FC<TitleProps> = ({ gerhaus }) => {
  return (
    <div className={`${gerhaus.className}   flex flex-col items-center `}>
      <span className="text-[300px] text-transparent  bg-clip-text bg-gradient-to-b from-[#ffffff] through-[#ffffff90] to-transparent ">
        Discover
      </span>
      <span className="text-[160px] -translate-y-[170px] text-transparent  bg-clip-text bg-gradient-to-b from-[#ffffff] through-[#ffffff90] to-transparent">
        Victoria falls
      </span>
    </div>
  );
};

export default Title;
