import React from "react";
import Link from "next/link";
import moment from "moment/moment";
import { FaRegComment } from "react-icons/fa";
import { TbFlame } from "react-icons/tb";
import { AiOutlineClockCircle } from "react-icons/ai";

const PostCard = ({ item }) => {
  return (
    <div className="">
      <div className="flex gap-4 flex-col w-full text-center">
        <Link
          className="flex flex-1 relative w-full h-[250px] overflow-hidden rounded-[20px] shadow-2xl lg:h-[500px]"
          href="#"
        >
          <img
            title={item.title}
            className="transition duration-300 hover:scale-110 w-full h-full object-cover"
            src={item.cover}
            alt=""
          />
          <div className="absolute top-[20px] gap-3 right-[20px] flex flex-row py-2 px-5 bg-[#F92A40] rounded-3xl shadow-lg text-sm">
            <span
              title={
                item.comments <= 1
                  ? `${item.comments} Comment`
                  : `${item.comments} Comments`
              }
              className="text-white flex flex-row gap-[3px] font-semibold items-center"
            >
              <FaRegComment />
              {item.comments}
            </span>
            <span
              title={
                item.views <= 1 ? `${item.views} View` : `${item.views} Views`
              }
              className="text-white flex flex-row gap-[3px] font-semibold items-center"
            >
              <TbFlame className="text-xl" />
              {item.views}
            </span>
            <span
              title={
                item.readingTime <= 1
                  ? `${item.readingTime} Minute Reading`
                  : `${item.readingTime} Minutes Reading`
              }
              className="text-white flex flex-row gap-[3px] font-semibold items-center"
            >
              <AiOutlineClockCircle className="text-base" />
              {item.readingTime}
            </span>
          </div>
        </Link>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex flex-row gap-4">
            {item.categories.map((category) => (
              <Link
                title={category}
                key={category}
                href="#"
                className="font-semibold text-base text-slate-600 lg:text-lg"
              >
                <span>#</span>
                {category}
              </Link>
            ))}
          </div>
          <Link className="flex flex-1" href="#">
            <h2
              title={item.title}
              className=" text-2xl text-slate-800 font-semibold transiton duration-200 hover:text-[#f92a40] lg:text-3xl"
            >
              {item.title}
            </h2>
          </Link>
          <div className="flex flex-row items-center gap-3">
            <div className="flex items-center flex-row gap-2">
              <Link
                className="w-[40px] h-[40px] rounded-full overflow-hidden"
                href="#"
              >
                <img
                  title={item.authorName}
                  src={item.authorAvatar}
                  className="w-100 h-100"
                  alt=""
                />
              </Link>
              <Link href="#">
                <span className="font-semibold text-sm text-slate-500 transition duration-200 hover:text-[#F92A40]">
                  {item.authorName}
                </span>
              </Link>
            </div>
            <span className="font-semibold text-slate-500">~</span>
            <span className="font-semibold text-sm text-slate-500">
              {moment(item.createdAt).format("MMMM DD, YYYY")}
            </span>
          </div>
          <p className="text-base text-slate-600">
            {item.content.substring(0, 150)}...
          </p>
          {/* <Link
            title={item.title}
            className="py-2 px-7 mt-3 text-white transition duration-200 rounded-3xl bg-slate-800 shadow-xl hover:bg-[#F92A40]"
            href="#"
          >
            Read More
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
