import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/Layout/lulu_logo.png";

const TopNav = () => {
  return (
    <nav className="flex w-full  h-32   bg-gradient-to-b from-[#231F2072] to-transparent absolute z-20 ">
      <div className="container justify-between flex w-full  items-center text-white ">
        <div className="relative">
          <Link href="/" className="h-20  ">
            <Image
              src={Logo}
              alt="lulu logo"
              className="object-contain h-20 w-full flex"
            />
          </Link>
        </div>
        <div className="flex flex-row xl:gap-10 lg:gap-8  text-2xl">
          <Link href="/page1">Home</Link>

          <Link href="/tours">Tours</Link>

          <Link href="/aboutus">About Us</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/bookings">Bookings</Link>

          {/* Add more navigation items as needed */}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
