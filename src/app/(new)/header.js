"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/Layout/lulu_colour_alt.png";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <nav className="flex w-full  h-24  bg-white  absolute z-20 ">
      <div className="container justify-between flex w-full  items-center text-blue ">
        <div className="relative">
          <Link href="/" className="h-16  ">
            <Image
              src={Logo}
              alt="lulu logo"
              className="object-contain h-16 w-full flex"
            />
          </Link>
        </div>
        <div className="flex flex-row xl:gap-8 lg:gap-6  text-lg">
          <Link
            href="/page1"
            className={`${pathname.includes("/home") ? "text-yellow  " : ""}`}
          >
            Home
          </Link>

          <Link
            href="/tours"
            className={`${pathname.includes("/tours") ? "text-yellow  " : ""}`}
          >
            Tours
          </Link>

          <Link
            href="/aboutus"
            className={`${
              pathname.includes("/aboutus") ? "text-yellow  " : ""
            }`}
          >
            About Us
          </Link>
          <Link
            href="/testimonials"
            className={`${
              pathname.includes("/testimonials") ? "text-yellow  " : ""
            }`}
          >
            Testimonials
          </Link>
          <Link
            href="/bookings"
            className={`${
              pathname.includes("/bookings") ? "text-yellow  " : ""
            }`}
          >
            Bookings
          </Link>

          {/* Add more navigation items as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
