import React, { useRef } from "react";
import { SiMinutemailer } from "react-icons/si";
import { FaTimes } from "react-icons/fa";
import { handleSubsForm } from "./Function";

const SubscribeForm = () => {
  const formBox = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      ref={formBox}
      className="subscribe_form_container fixed z-[10000] inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center p-[30px] transition duration-300"
    >
      <div className="transition duration-300 delay-[200ms] max-w-[400px] p-[25px] w-full bg-white rounded-lg flex flex-col gap-2 relative">
        <FaTimes
          onClick={handleSubsForm}
          className="absolute top-[15px] right-[15px] cursor-pointer text-xl text-slate-800 transition duration-200 hover:text-[#F92A40]"
          title="Close Form"
        />
        <h2 className="text-center text-2xl font-semibold text-slate-800">
          Subscribe To Us
        </h2>
        <span className="text-slate-700 text-base font-base text-center">
          Receive{" "}
          <span className="font-semibold text-[#F92A40]">
            Exclusive Resources
          </span>{" "}
          Only Shared With Our Email Subscribers
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex mt-[20px] w-full flex-col gap-2 lg:gap-0 lg:flex-row overflow-hidden"
        >
          <input
            required
            type="email"
            placeholder="Your Best Email Address"
            className="h-[50px] lg:flex-1 bg-slate-200 px-4"
          />
          <button className="p-4 text-lg bg-[#F92A40] text-white flex items-center justify-center">
            <SiMinutemailer />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
