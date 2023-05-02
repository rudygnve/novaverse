import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { toggleSearch } from "./Function";

const SearchContainer = () => {
  return (
    <div className="z-[10000] fixed search_container top-[-400px] left-0 right-0 w-full h-[400px] p-[20px] bg-white shadow-2xl transition duration-300">
      <FaTimes
        onClick={toggleSearch}
        className="absolute top-[20px] right-[20px] cursor-pointer text-2xl text-slate-800 transition duration-200 hover:text-[#F92A40]"
      />
      <div className="w-full h-full flex-col gap-[30px] flex items-center justify-center">
        <h1 className="text-3xl text-slate-800 font-semibold">
          Search By Category
        </h1>
        <form className="max-w-[600px] flex gap-[20px] flex-col w-full">
          <input
            required
            className="w-full h-[50px] rounded-lg bg-slate-200 px-3 text-gray-800"
            type="text"
            placeholder="Type Something..."
          />
          <ul className="flex flex-row gap-[20px] self-center text-slate-600 text-sm font-semibold">
            <li>
              <span className="cursor-pointer transition duration-300 hover:text-[#F92A40]">
                Health
              </span>
            </li>
            <li>
              <span className="cursor-pointer transition duration-300 hover:text-[#F92A40]">
                Lifestyle
              </span>
            </li>
            <li>
              <span className="cursor-pointer transition duration-300 hover:text-[#F92A40]">
                Entertaiment
              </span>
            </li>
            <li>
              <span className="cursor-pointer transition duration-300 hover:text-[#F92A40]">
                Science
              </span>
            </li>
          </ul>
          <button className="py-2 px-5 w-[120px] text-lg font-semibold text-white rounded-lg self-center bg-slate-800 transition duration-200 hover:bg-[#F92A40]">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchContainer;
