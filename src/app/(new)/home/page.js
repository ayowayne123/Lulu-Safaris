import React from "react";
import victoria from "@/app/(new)/home/images/Victoria-Falls-Zimbabwe.jpg";
import lulu from "@/app/(new)/home/images/lulu.jpg";
import Image from "next/image";
import localFont from "next/font/local";

export const metadata = {
  title: "Home | Lulu Safaris",
  description: "Welcome to a world of safaris",
};

const gerhaus = localFont({
  src: [
    {
      path: "../../../../public/fonts/Gerhaus.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

function Home() {
  return (
    <div>
      <div className="relative h-screen min-h-[900px] w-full ">
        <Image src={victoria} alt="victoria falls" priority fill />
        <div className="absolute h-full w-full z-10 bg-[#1f1f1f80]">
          <div className="container h-full  grid grid-cols-2 items-center justify-center">
            <div>
              <div className="text-white font-semibold text-5xl">Discover</div>
              <div className="flex flex-row gap-2 leading-8">
                <span
                  className={`text-white font-bold text-[80px] ${gerhaus.className} drop-shadow-gold`}
                >
                  Victoria
                </span>
                <span
                  className={`text-blue font-bold text-[80px] ${gerhaus.className} drop-shadow-white`}
                >
                  Falls
                </span>
              </div>
            </div>
            <div className="h-[500px] w-[500px] relative">
              <Image
                src={lulu}
                fill
                alt="person standing"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
