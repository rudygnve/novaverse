import React from "react";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const ProfileCard = () => {
  return (
    <div className="w-full shadow-md  rounded-2xl overflow-hiden flex flex-col">
      <div className="w-full overflow-hidden h-[200px] rounded-2xl">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 relative text-center px-[15px] py-[20px]">
        <Link
          className="w-[120px] h-[120px] absolute rounded-full overflow-hidden translate-y-[-65%] translate-x-[-50%] left-[50%] shadow-md"
          href="#"
        >
          <img
            className="w-100 h-100 object-cover"
            src="/assets/author.jpg"
            alt=""
          />
        </Link>
        <Link
          href="#"
          className="w-[fit-content] self-center text-slte-800 font-semibold text-xl transition duration-200 mt-[50px] hover:text-[#F92A40]"
        >
          Rudy Genave
        </Link>
        <span className="font-semibold text-slate-400 text-base">Creator</span>
        <p className="text-base text-slate-700 mb-[15px]">
          <span className="font-semibold">NovaVerse</span>
          <span className="text-[#F92A40] font-bold">.</span> is a website
          created to showcase immersive sci-fi storytelling through art, music,
          and writing.
        </p>
        <div className="flex flex-row items-center justify-center gap-[30px]">
          <Link href="#">
            <BsFacebook className="text-xl text-[#F92A40] transition duration-200 hover:text-slate-800" />
          </Link>
          <Link href="#">
            <BsTwitter className="text-xl text-[#F92A40] transition duration-200 hover:text-slate-800" />
          </Link>
          <Link href="#">
            <BsInstagram className="text-xl text-[#F92A40] transition duration-200 hover:text-slate-800" />
          </Link>
          <Link href="#">
            <BsLinkedin className="text-xl text-[#F92A40] transition duration-200 hover:text-slate-800" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
