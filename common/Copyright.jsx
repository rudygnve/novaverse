import React from "react";

const Copyright = () => {
  return (
    <div className="flex w-full py-[25px] justify-center">
      <span className="text-base text-slate-400">
        © {new Date().getFullYear()} NovaVerse. | All Rights Reserved.
      </span>
    </div>
  );
};

export default Copyright;
