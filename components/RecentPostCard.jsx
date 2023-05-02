import React from "react";
import { data } from "../common/data";
import Link from "next/link";
import moment from "moment";

const RecentPostCard = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h2 className="text-slate-800 text-3xl text-center font-semibold">
        Featured Posts
      </h2>
      <div className="w-full gap-3 flex flex-col">
        {data.slice(0, 3).map((item) => (
          <div className="flex flex-row items-center gap-3 p-2 recent_post_box rounded-xl transition duration-200 hover:shadow-xl">
            <Link
              className="flex-[1] w-[100px] h-[100px] rounded-lg overflow-hidden"
              href="#"
            >
              <img
                className="w-full h-full object-cover transition duration-[500ms] hover:scale-110"
                src={item.cover}
                alt=""
              />
            </Link>
            <div className="flex-[2] flex flex-col gap-[8px]">
              <span className="text-[12px] font-semibold text-slate-500">
                {moment(item.createdAt).format("MMMM DD, YYYY")}
              </span>
              <Link href="">
                <h2 className="text-[15px] font-semibold text-slate-800 transition duration-200 hover:text-[#F92A40]">
                  {item.title}
                </h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPostCard;
