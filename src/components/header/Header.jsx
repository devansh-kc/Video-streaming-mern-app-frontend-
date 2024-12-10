import React, { useEffect, useState } from "react";
import { logo } from "../../data";
import { useSearchParams } from "react-router-dom";
import {
  Search,
  CircleX,
  ThumbsUp,
  CircleHelp,
  Video,
  Settings,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user.userInfo);
  const [searchParams, setSearchParams] = useSearchParams();
  const [Input, setInput] = useState(searchParams.get("query") || "");
  function handleSearch(e) {
    e.preventDefault();
    if (Input !== null || "") {
      navigate("/query");
      setInput(e.target.value);
      setTimeout(() => {
        setSearchParams({ query: e.target.value });
      }, 1000);
    } else {
      navigate("/");
    }
  }

  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
      <nav className="mx-auto flex max-w-7xl items-center py-2">
        <div className="mr-4 w-12 shrink-0 sm:w-16">{logo}</div>
        <div className="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
          <input
            className="w-full border bg-transparent py-1 pl-8 pr-3 placeholder-white outline-none sm:py-2"
            placeholder="Search"
            value={Input}
            type="text"
            onChange={(e) => handleSearch(e)}
          />
          <span className="absolute left-2.5 top-1/2 inline-block -translate-y-1/2">
            <Search className="h-4 w-4" />
          </span>
        </div>
        <button className="ml-auto sm:hidden">
          <Search className="h-4 w-4" />
        </button>
        <button className="group peer ml-4 flex w-6 shrink-0 flex-wrap gap-y-1.5 sm:hidden">
          <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
          <span className="block h-[2px] w-2/3 bg-white group-hover:bg-[#ae7aff]"></span>
          <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
        </button>
        <div className="fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col border-l border-white bg-[#121212] duration-200 hover:translate-x-0 peer-focus:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 sm:border-none">
          <div className="relative flex w-full items-center justify-between border-b border-white px-4 py-2 sm:hidden">
            <span className="inline-block w-12">{logo}</span>
            <button className="inline-block w-8">
              <CircleX />
            </button>
          </div>
          <ul className="my-4 flex w-full flex-wrap gap-2 px-4 sm:hidden">
            <li className="w-full">
              <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                  <ThumbsUp />
                </span>
                <span>Liked Videos</span>
              </button>
            </li>
            <li className="w-full">
              <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                  <Video />
                </span>
                <span>My Content</span>
              </button>
            </li>
            <li className="w-full">
              <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                  <CircleHelp />
                </span>
                <span>Support</span>
              </button>
            </li>
            <li className="w-full">
              <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                  <Settings />
                </span>
                <span>Settings</span>
              </button>
            </li>
          </ul>
          <div className="mb-8 mt-auto flex w-full flex-wrap gap-4 px-4 sm:mb-0 sm:mt-0 sm:items-center sm:px-0">
            {userDetails ? (
              <img
                src={userDetails.avatar}
                alt={userDetails.fullName}
                className="h-16 w-16 shrink-0 rounded-full sm:h-12 sm:w-12"
              />
            ) : (
              <>
                <Link
                  to="/login"
                  className="w-full bg-[#383737] px-3 py-2 hover:bg-[#4f4e4e] sm:w-auto sm:bg-transparent"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="mr-1 w-full bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
