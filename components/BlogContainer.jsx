import React from "react";
import { data } from "@/common/data";
import PostCard from "./PostCard";

const BlogContainer = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-[50px]">
        {data.slice(0, 4).map((item) => (
          <PostCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;
