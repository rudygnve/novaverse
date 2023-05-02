import React from "react";
import BlogContainer from "./BlogContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="py-8 px-[20px] lg:px-[9%] gap-10 flex flex-col lg:flex-row w-full h-100">
      <BlogContainer />
      <Sidebar />
    </div>
  );
};

export default Body;
