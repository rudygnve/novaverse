import React from "react";
import BlogContainer from "./BlogContainer";
import Sidebar from "./Sidebar";
import Link from "next/link";

const Body = () => {
  return (
    <div className="py-8 px-[20px] lg:px-[9%] gap-10 flex flex-col lg:flex-row w-full h-100">
      <div className="flex flex-col w-100 gap-[30px] lg:w-[70%]">
        <BlogContainer />
        <Link
          className="self-center py-2 px-7 mt-3 text-white transition duration-200 rounded-3xl bg-slate-800 shadow-xl hover:bg-[#F92A40]"
          href="/blog"
        >
          See Older Posts
        </Link>
      </div>
      <Sidebar />
    </div>
  );
};

export default Body;
