import React from "react";
import Link from "next/link";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-wrap px-[20px] lg:px-[9%] pt-[80px] py-[30px] gap-[40px]">
      <div className="flex flex-auto items-center justify-center flex-col gap-2">
        <Link
          title="NovaVerse."
          className="transiton duration-300 text-2xl lg:text-4xl font-bold text-center text-slate-800 logo"
          href="/"
        >
          NovaVerse<span className="text-[#F92A40]">.</span>
        </Link>
      </div>
      <div className="flex flex-auto flex-col gap-3">
        <h2 className="font-bold text-xl text-slate-800 flex justify-center">
          Quick Links
        </h2>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-center">
            <Link
              className="text-slate-600 font-semibold transition duration-200 hover:text-[#F92A40]"
              href="#"
            >
              FAQs
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              className="text-slate-600 font-semibold transition duration-200 hover:text-[#F92A40]"
              href="#"
            >
              Blog
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              className="text-slate-600 font-semibold transition duration-200 hover:text-[#F92A40]"
              href="#"
            >
              About
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              className="text-slate-600 font-semibold transition duration-200 hover:text-[#F92A40]"
              href="#"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-auto justify-start flex-col gap-3">
        <h2 className="font-bold text-xl text-slate-800 flex justify-center">
          Category
        </h2>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-center">
            <Link
              className="text-slate-600 font-semibold transition duration-200 hover:text-[#F92A40]"
              href="#"
            >
              Health
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              className="text-slate-600 font-semibold transition duration-200 hover:text-[#F92A40]"
              href="#"
            >
              Lifestyle
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              className="text-slate-600 font-semibold transition duration-200 hover:text-[#F92A40]"
              href="#"
            >
              Technology
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-auto flex-col gap-3">
        <h2 className="font-bold text-xl text-slate-800 flex justify-center">
          Connect With Us
        </h2>
        <ul className="flex flex-row gap-[30px] items-center self-center">
          <li>
            <Link
              className="text-slate-600 text-xl transition duration-200 hover:text-[#F92A40]"
              href="#"
            >
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-600 text-xl transition duration-200 hover:text-[#F92A40]"
              href="#"
            >
              <BsInstagram />
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-600 text-xl transition duration-200 hover:text-[#F92A40]"
              href="#"
            >
              <BsTwitter />
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-600 text-xl transition duration-200 hover:text-[#F92A40]"
              href="#"
            >
              <BsLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
