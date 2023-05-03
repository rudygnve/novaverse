import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import React, { useState } from "react";
import { data } from "@/common/data";
import SubscribeForm from "@/common/SubscribeForm";
import ScrollTop from "@/common/ScrollTop";
import Footer from "@/components/Footer";
import Copyright from "@/common/Copyright";
import SearchContainer from "@/common/SearchContainer";
import ReactPaginate from "react-paginate";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";

const index = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const postsPerPage = 4;
  const pagesVisited = pageNumber * postsPerPage;

  const pageCount = Math.ceil(data.length / postsPerPage);

  console.log(data.length);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      <MenuList />
      <SubscribeForm />
      <SearchContainer />
      <ScrollTop />
      <div className="flex flex-col gap-[30px]">
        <div className="py-[20px] px-[20px] lg:px-[9%] w-full">
          <h1 className="text-3xl lg:text-[45px] mb-[40px] w-[fit-content] relative blog_section_title text-slate-800 font-semibold text-center mb-[30px]">
            Blog
          </h1>
          <div className="flex flex-col gap-[40px]">
            <div className="blog_container">
              {data
                .slice(pagesVisited, postsPerPage + pagesVisited)
                .map((item) => (
                  <PostCard key={item.title} item={item} />
                ))}
            </div>
          </div>
        </div>
        <div className="self-center">
          <ReactPaginate
            onClick={handleScrollTop}
            previousLabel={<BsChevronDoubleLeft />}
            nextLabel={<BsChevronDoubleRight />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="paginate"
            previousLinkClassName="prev"
            nextLinkClassName="next"
            activeClassName="paginate_active"
            disabledClassName=""
          />
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default index;
