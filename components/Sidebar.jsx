import React from "react";
import ProfileCard from "./ProfileCard";
import SocialCard from "./SocialCard";
import RecentPostCard from "./RecentPostCard";

const Sidebar = () => {
  return (
    <div className="sidebar w-100 flex flex-col gap-[40px] lg:sticky lg:top-[30px] lg:w-[30%]">
      <ProfileCard />
      <SocialCard />
      <RecentPostCard />
    </div>
  );
};

export default Sidebar;
