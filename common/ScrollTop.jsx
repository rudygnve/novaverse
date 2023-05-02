import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      {showButton && (
        <button
          onClick={scrollToTop}
          className="scrollTopBtn transition duration-200 hover:bg-[#F92A40] z-[9999]"
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
