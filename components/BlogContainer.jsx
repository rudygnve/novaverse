import React from "react";
import { data } from "@/common/data";
import PostCard from "./PostCard";

const BlogContainer = () => {
  return (
    <div className="w-100 lg:w-[70%]">
      <div className="w-full flex flex-col gap-[50px]">
        {data.map((item) => (
          <PostCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;
