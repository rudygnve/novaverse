import React, { useRef, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { RiMailSendLine } from "react-icons/ri";
import Link from "next/link";
import { handleSubsForm, toggleSearch } from "@/common/Function";

const Navbar = () => {
  const navbar = useRef();

  // useEffect(() => {
  //   window.onscroll = function () {
  //     scrollFunction();
  //   };
  // }, []);

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 100 ||
  //     document.documentElement.scrollTop > 100
  //   ) {
  //     navbar.current.classList.add("sticky");
  //   } else {
  //     navbar.current.classList.remove("sticky");
  //   }
  // }

  return (
    <div
      ref={navbar}
      className="select-none flex flex-row items-center justify-between py-[30px] px-[20px] lg:px-[9%] navbar_container transtion duration-300"
    >
      <button
        onClick={toggleSearch}
        title="Search"
        className="flex items-center justify-center w-[40px] h-[40px] bg-[#F92A40] rounded-full cursor-pointer transition duration-300 hover:bg-slate-800"
      >
        <BiSearch className="text-xl text-white font-bold" />
      </button>
      <Link
        title="NovaVerse."
        className="transiton duration-300 text-2xl lg:text-[45px] font-semibold text-center text-slate-800 logo"
        href="/"
      >
        NovaVerse<span className="text-[#F92A40]">.</span>
      </Link>
      <button
        title="Subscribe"
        onClick={handleSubsForm}
        className="flex items-center justify-center w-[40px] h-[40px] bg-[#F92A40] rounded-full cursor-pointer transition duration-300 hover:bg-slate-800"
      >
        <RiMailSendLine className="text-xl text-white font-bold" />
      </button>
    </div>
  );
};

export default Navbar;
