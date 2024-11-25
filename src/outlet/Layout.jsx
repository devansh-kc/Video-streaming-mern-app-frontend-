import React from "react";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/sideBar";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
      <Header LoggedInUser={true} />

      <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
        {location.pathname === "/admin" ? (
          ""
        ) : (
          <SideBar hidden={location.pathname === "/videoPage" ? true : false} />
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
