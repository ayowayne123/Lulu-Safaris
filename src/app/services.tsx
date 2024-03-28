import React from "react";
import { NextFont } from "next/dist/compiled/@next/font";

interface TitleProps {
  gerhaus: {
    className: any;
  };
}

const Services: React.FC<TitleProps> = ({ gerhaus }) => {
  return (
    <div className="bg-gradient-to-t from-white via-white to-[#ffffff25] from-5% via-95% to-100%  h-screen pt-28">
      <div className="container">
        <div className="text-5xl"> Be in Awe of the beauty</div>
        <div className={`text-7xl ${gerhaus.className}`}> Victoria Falls</div>
      </div>
    </div>
  );
};

export default Services;
