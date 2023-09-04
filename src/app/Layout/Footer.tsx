"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer_Bg from "@/app/Layout/Footer_Bg.png";

const inter = Inter({ subsets: ["latin"] });

function Footer() {
  const [email, setEmail] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  console.log(email);
  return (
    <>
      <div className="h-[750px]  w-full relative">
        <Image
          src={Footer_Bg}
          alt="Image of WaterFall"
          className="object-cover object-bottom"
          fill
        />
        <div className="absolute inset-0 h-full container py-14">
          <div className="py-12 text-center text-black">
            <div className="font-bold text-5xl">Sign up for our newsletter</div>
            <div>
              Don&apos;t miss out on promotions, deals and new packages we come
              out with
            </div>
          </div>
          <form className="w-full flex flex-row gap-5 px-16">
            <input
              type="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
              className={`rounded-full bg-grey w-4/5 h-16 placeholder:opacity-30 placeholder:text-xl px-7 flex justify-center items-center ${inter.className}`}
            />

            <button className="bg-yellow text-2xl font-bold rounded-full items-center justify-center h-16 grid px-4 leading-normal ">
              <span className="translate-y-2">Subscribe </span>
            </button>
          </form>
          <div className="flex flex-row justify-between py-16 w-full ">
            <div>Contact</div>
            <div>Contact</div>
            <div>Contact</div>
            <div>Contact</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
