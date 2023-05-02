import React from "react";
import Link from "next/link";
import { MdKeyboardArrowUp } from "react-icons/md";

const MenuList = () => {
  return (
    <div className="py-[30px] mb-[20px] w-full flex hidden lg:flex justify-center">
      <ul className="flex flex-row gap-10 items-center">
        <li className="menuListItem">
          <Link className="text-slate-500 font-semibold text-lg" href="#">
            Home
          </Link>
        </li>
        <li className="menuListItem">
          <Link
            className="text-slate-500 font-semibold text-lg transition duration-200"
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li className="menuListItem">
          <Link
            className="flex flex-row gap-1 items-center text-slate-500 font-semibold text-lg transition duration-200"
            href="#"
          >
            Tags
            <MdKeyboardArrowUp className="tags_arrow transition duration-200 text-xl" />
          </Link>
          <div className="tags_box shadow-xl">
            <ul className="flex flex-col">
              <li className="h-[50px] w-full">
                <Link
                  className="px-2 h-full flex justify-center items-center text-slate-700 font-semibold transition duration-200 hover:bg-slate-200"
                  href="#"
                >
                  <span className="text-[#F92A40]">#</span>Travel
                </Link>
              </li>
              <li className="h-[50px] w-full">
                <Link
                  className="justify-center px-2 h-full flex items-center text-slate-700 font-semibold transition duration-200 hover:bg-slate-200"
                  href="#"
                >
                  <span className="text-[#F92A40]">#</span>Enterprise
                </Link>
              </li>
              <li className="h-[50px] w-full">
                <Link
                  className="justify-center px-2 h-full flex items-center text-slate-700 font-semibold transition duration-200 hover:bg-slate-200"
                  href="#"
                >
                  <span className="text-[#F92A40]">#</span>Food
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="menuListItem">
          <Link
            className="text-slate-500 font-semibold text-lg transition duration-200"
            href="#"
          >
            Services
          </Link>
        </li>
        <li className="menuListItem">
          <Link
            className="text-slate-500 font-semibold text-lg transition duration-200"
            href="#"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
