import Image from "next/image";
import Background from "../../public/LuluBg.png";
import Title from "./hero";
import Services from "./services";

export default function Home() {
  return (
    <main className="w-full  ">
      <div className="min-h-[200vh] w-full relative">
        <Image
          src={Background}
          alt="Water fall"
          className="object-cover object-top"
          fill
        />
        <div className="absolute z-20 top-32 w-full ">
          <Title />

          <Services />
        </div>
      </div>
    </main>
  );
}
