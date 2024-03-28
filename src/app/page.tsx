import Image from "next/image";
import Background from "../../public/LuluBg.png";
import Title from "./hero";
import Services from "./services";
import localFont from "next/font/local";

const gerhaus = localFont({
  src: [
    {
      path: "../../public/fonts/Gerhaus.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function Home() {
  return (
    <main className="w-full  ">
      <div className="h-[1970px] w-full relative">
        <Image
          src={Background}
          alt="Water fall"
          className="object-cover object-top"
          fill
        />
        <div className="absolute z-20 top-32 w-full ">
          <Title gerhaus={gerhaus} />

          <Services gerhaus={gerhaus} />
        </div>
      </div>
    </main>
  );
}
