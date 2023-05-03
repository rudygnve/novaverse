import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Copyright from "@/common/Copyright";
import MenuList from "@/components/MenuList";
import Link from "next/link";
import { data } from "@/common/data";
import Sidebar from "@/components/Sidebar";
import moment from "moment/moment";
import { TbFlame } from "react-icons/tb";
import { FaRegComment } from "react-icons/fa";
import ScrollTop from "@/common/ScrollTop";
import SearchContainer from "@/common/SearchContainer";
import SubscribeForm from "@/common/SubscribeForm";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsPinterest,
  BsTelegram,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdOutlineContentCopy } from "react-icons/md";

const SinglPost = () => {
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const input = useRef();

  useEffect(() => {
    setCopiedText(input.current.value);
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(copiedText).then(
      () => {
        setCopiedMessage(true);
        setTimeout(() => {
          setCopiedMessage(false);
        }, 5000);
      },
      (err) => {
        alert(err.message);
      }
    );
  };

  return (
    <div>
      <Navbar />
      <MenuList />
      <div className="py-8 px-[20px] lg:px-[9%] gap-10 flex flex-col lg:flex-row w-full h-100">
        <div className="flex flex-col gap-[20px] w-100 lg:w-[70%]">
          <div className="w-full shadow-2xl p-[20px] rounded-xl">
            <div className="w-full h-[250px] lg:h-[500px] overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover"
                src={data[0].cover}
                alt=""
              />
            </div>
            <div className="py-[25px] w-full flex justify-center border-b-2 border-0 border-gray-300 border-solid">
              <h1 className="text-xl lg:text-3xl text-center text-slate-800 font-semibold">
                {data[0].title}
              </h1>
            </div>
            <div className="mt-[15px] mb-[60px] flex p-0 lg:px-[20px] flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <Link className="" href="#">
                  <img
                    className=" w-[50px] h-[50px] rounded-full"
                    src={data[0].authorAvatar}
                    alt=""
                  />
                </Link>
                <div className="flex flex-col gap-[2px]">
                  <Link
                    className="text-sm text-slate-800 w-[fit-content] font-semibold"
                    href="#"
                  >
                    {data[0].authorName}
                  </Link>
                  <span className="text-gray-500 text-sm">
                    {moment(data[0].createdAt).format("MMMM DD, YYYY")} /{" "}
                    {data[0].readingTime <= 1
                      ? `${data[0].readingTime} Minute Read`
                      : `${data[0].readingTime} Minutes Read`}
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <span className="flex flex-row gap-[2px] items-center text-sm font-semibold text-gray-700">
                  <TbFlame className="text-lg text-[#F92A40]" />
                  {data[0].views}
                </span>
                <span className="flex flex-row gap-[3px] items-center text-sm font-semibold text-gray-700">
                  <FaRegComment className="text-[#F92A40]" />
                  {data[0].comments && data[0].comments}
                </span>
              </div>
            </div>
            <div className="text-base text-gray-800">
              <h3 className="text-lg lg:text-xl font-semibold">
                Lorem Lorem Lorem
              </h3>
              <br />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cumque officiis omnis itaque beatae cupiditate placeat
                libero distinctio aliquid. Repellendus corrupti ex dicta aliquam
                ducimus soluta doloremque pariatur, cum natus accusamus
                reprehenderit magnam? Voluptatibus accusamus, ducimus modi
                accusantium consequatur iste,
              </p>
              <br />
              <h3 className="text-lg lg:text-xl font-semibold">
                Lorem Lorem Lorem
              </h3>
              <br />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cumque officiis omnis itaque beatae cupiditate placeat
                libero distinctio aliquid. Repellendus corrupti ex dicta aliquam
                ducimus soluta doloremque pariatur, cum natus accusamus
                reprehenderit magnam? Voluptatibus accusamus, ducimus modi
                accusantium consequatur iste,
              </p>
              <br />
              <h3 className="text-lg lg:text-xl font-semibold">
                Lorem Lorem Lorem
              </h3>
              <br />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cumque officiis omnis itaque beatae cupiditate placeat
                libero distinctio aliquid. Repellendus corrupti ex dicta aliquam
                ducimus soluta doloremque pariatur, cum natus accusamus
                reprehenderit magnam? Voluptatibus accusamus, ducimus modi
                accusantium consequatur iste,
              </p>
              <br />
              <h3 className="text-lg lg:text-xl font-semibold">
                Lorem Lorem Lorem
              </h3>
              <br />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cumque officiis omnis itaque beatae cupiditate placeat
                libero distinctio aliquid. Repellendus corrupti ex dicta aliquam
                ducimus soluta doloremque pariatur, cum natus accusamus
                reprehenderit magnam? Voluptatibus accusamus, ducimus modi
                accusantium consequatur iste,
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg lgtext-2xl font-bold text-slate-800">
              Tags:
            </h1>
            <div className="flex lfex-wrap gap-[12px]">
              {data[0].categories.map((category) => (
                <Link
                  href="#"
                  key={category}
                  className="px-4 py-2 font-semibold shadow-lg rounded-lg text-gray-900 transition duration-200 hover:text-white hover:bg-[#F92A40]"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full px-3 mt-[20px] flex flex-col gap-[15px]">
            <h1 className="text-lg text-center text-slate-800 font-semibold">
              Share This Post:
            </h1>
            <div className="w-full">
              <ul className="flex flex-row gap-[20px] justify-center">
                <li>
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      "http://localhost:3000/blog/" + data[0].slug
                    )}`}
                    target="_blank"
                    className="w-[40px] bg-[#1877f2] h-[40px] shadow-xl flex items-center justify-center text-lg text-white rounded-full transition duration-300 ease-in hover:translate-y-[-5px]"
                  >
                    <BsFacebook />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="w-[40px] bg-[#e1306c] shadow-xl h-[40px] flex items-center justify-center text-lg text-white rounded-full transition duration-300 ease-in hover:translate-y-[-5px]"
                  >
                    <BsInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="w-[40px] bg-[#1da1f2] shadow-xl h-[40px] flex items-center justify-center text-lg text-white rounded-full transition duration-300 ease-in hover:translate-y-[-5px]"
                  >
                    <BsTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={`https://t.me/share/url?url=http://localhost:3000/blog/${data[0].slug}&text=`}
                    className="w-[40px] bg-[#0088cc] shadow-xl h-[40px] flex items-center justify-center text-lg text-white rounded-full transition duration-300 ease-in hover:translate-y-[-5px]"
                  >
                    <BsTelegram />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={
                      `mailto:?&subject=Read This Now!&body=http://localhost:3000/blog/` +
                      data[0].slug
                    }
                    className="w-[40px] bg-[#ffa930] shadow-xl h-[40px] flex items-center justify-center text-lg text-white rounded-full transition duration-300 ease-in hover:translate-y-[-5px]"
                  >
                    <FiMail />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={
                      `https://api.whatsapp.com/send?text=%0ahttp://localhost:3000/blog/` +
                      data[0].slug
                    }
                    className="w-[40px] bg-[#25d366] shadow-xl h-[40px] flex items-center justify-center text-lg text-white rounded-full transition duration-300 ease-in hover:translate-y-[-5px]"
                  >
                    <BsWhatsapp />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-[10px] w-full flex items-center justify-center">
              <input
                ref={input}
                type="text"
                disabled
                value={`http://localhost:3000/blog/${data[0].slug}`}
                className="flex-1 text-sm text-gray-500 max-w-[400px] h-[40px] border-[2px] px-2 border-gray-800 border-r-0 border-solid bg-transparent"
              />
              <button
                onClick={handleCopy}
                className="relate text-base text-white bg-[#F92A40] px-3 h-[40px]"
              >
                <MdOutlineContentCopy />
                {copiedMessage && (
                  <div className="transtion duration-300 rounded-[5px] absolute bg-black translate-x-[-50%] translate-y-[75%] left-[50%] z-[10000]">
                    <span className="text-[11px] py-2 px-3">Link Copied!</span>
                    <div className="bg-black absolute w-[10px] h-[10px] rotate-45 translate-x-[-50%] translate-y-[-50%] left-[50%] top-0"></div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
      <ScrollTop />
      <SearchContainer />
      <SubscribeForm />
      <Footer />
      <Copyright />
    </div>
  );
};

export default SinglPost;
