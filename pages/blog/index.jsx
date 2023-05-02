import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import React from "react";
import { data } from "@/common/data";
import SubscribeForm from "@/common/SubscribeForm";
import ScrollTop from "@/common/ScrollTop";
import Footer from "@/components/Footer";
import Copyright from "@/common/Copyright";
import SearchContainer from "@/common/SearchContainer";

const index = () => {
  return (
    <div>
      <Navbar />
      <MenuList />
      <SubscribeForm />
      <SearchContainer />
      <ScrollTop />
      <div className="py-[20px] px-[20px] lg:px-[9%] w-full">
        <h1 className="text-3xl lg:text-[45px] mb-[40px] w-[fit-content] relative blog_section_title text-slate-800 font-semibold text-center mb-[30px]">
          Blog
        </h1>
        <div className="blog_container">
          {data.map((item) => (
            <PostCard item={item} />
          ))}
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default index;
