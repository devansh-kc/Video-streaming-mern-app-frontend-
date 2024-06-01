import React from "react";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/sideBar";

const HomePage = () => {
  return (
    <>
      <div className="h-screen overflow-y-auto bg-[#121212] text-white">
        <Header />
        <SideBar />
      </div>
    </>
  );
};

export default HomePage;
