import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const SocialCard = () => {
  return (
    <div className="flex flex-col gap-[20px] w-full px-4">
      <h2 className="text-slate-800 text-3xl text-center font-semibold">
        Follow Us
      </h2>
      <div className="flex flex-col gap-2">
        <Link
          className="text-white px-4 py-3 flex flex-row gap-[10px] items-center bg-[#1877f2] font-semibold rounded-3xl transition duration-200 hover:shadow-xl"
          href=""
        >
          <FaFacebookF />
          Facebook
        </Link>
        <Link
          className="text-white px-4 py-3 flex flex-row gap-[10px] items-center bg-[#1da1f2] font-semibold rounded-3xl transition duration-200 hover:shadow-xl"
          href=""
        >
          <BsTwitter />
          Twitter
        </Link>
        <Link
          className="text-white px-4 py-3 flex flex-row gap-[10px] items-center bg-[#e1306c] font-semibold rounded-3xl transition duration-200 hover:shadow-xl"
          href=""
        >
          <BsInstagram />
          Instagram
        </Link>
        <Link
          className="text-white px-4 py-3 flex flex-row gap-[10px] items-center bg-[#0a66c2] font-semibold rounded-3xl transition duration-200 hover:shadow-xl"
          href=""
        >
          <BsLinkedin />
          LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default SocialCard;
