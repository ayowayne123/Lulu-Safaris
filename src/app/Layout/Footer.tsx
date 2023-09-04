"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer_Bg from "@/app/Layout/Footer_Bg.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function Footer() {
  const [email, setEmail] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const currentYear = new Date().getFullYear();

  console.log(email);
  return (
    <>
      <div className="h-[780px]  w-full relative">
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
          <div className="flex flex-row justify-between pt-16 w-full  font-bold text-3xl">
            <div className=" ">
              <div> Contact</div>
              <div className="gap-4 flex flex-col py-4 font-light text-2xl">
                <span>Contact</span>
                <span>About</span>
                <span>Preview</span>
                <span>Meet the Team</span>
              </div>
            </div>
            <div>
              <div> Tours</div>
              <div className="gap-4 flex flex-col py-4 font-light text-2xl">
                <span>Contact</span>
                <span>About</span>
                <span>Preview</span>
                <span>Meet the Team</span>
              </div>
            </div>
            <div>
              <div> People</div>
              <div className="gap-4 flex flex-col py-4 font-light text-2xl">
                <span>Contact</span>
                <span>About</span>
                <span>Preview</span>
                <span>Meet the Team</span>
              </div>
            </div>
            <div>
              <div> Company</div>
              <div className="gap-4 flex flex-col py-4 font-light text-2xl">
                <span>Contact</span>
                <span>About</span>
                <span>Preview</span>
                <span>Meet the Team</span>
              </div>
            </div>
            <div className="">
              <div> Contact</div>
              <div className="gap-4 flex flex-col py-4 font-light text-2xl">
                <span>Contact</span>
                <span>About</span>
                <span>Preview</span>
                <span>Meet the Team</span>
              </div>
            </div>
          </div>
          <div className="text-white  flex flex-row justify-between pt-20">
            <span className="text-lg font-bold">
              {" "}
              Copyright © {currentYear} Lulu Safaris
            </span>
            <span className="flex flex-row gap-4 justify-center items-center font-bold text-5xl ">
              <Link className="hover:text-yellow" href="https://facebook.com">
                <FaFacebookF />{" "}
              </Link>
              <Link className="hover:text-yellow" href="https://Instagram.com">
                <FaInstagram />{" "}
              </Link>
              <Link className="hover:text-yellow" href="https://Twitter.com">
                <FaTwitter />{" "}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
