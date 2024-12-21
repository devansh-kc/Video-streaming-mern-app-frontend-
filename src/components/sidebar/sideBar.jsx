import React from "react";
import {
  History,
  Home,
  ThumbsUp,
  FolderClosed,
  UserRoundCheck,
  CircleHelp,
  Settings,
  Video,
} from "lucide-react";
import OptionComponent from "./SideBarOptionComponent/OptionComponent";
import { Link } from "react-router-dom";

function SideBar({ hidden }) {
  return (
    <aside
      className={`group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px] ${
        hidden ? "" : "lg:sticky lg:max-w-[250px]"
      } `}
    >
      <ul className="flex justify-around gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">
        <OptionComponent
          Icon={<Home />}
          Name="Home"
          hidden={hidden}
          navigation="/"
        />
        <OptionComponent
          Icon={<ThumbsUp />}
          Name="Liked Videos"
          ClassName="hidden sm:block"
          hidden={hidden}
          navigation="/likedVideos"
        />
        <OptionComponent
          Icon={<History />}
          Name="History"
          hidden={hidden}
          navigation="/history"
        />
        <OptionComponent
          Icon={<Video />}
          Name="My Content"
          ClassName="hidden sm:block"
          hidden={hidden}
          navigation="/channel"
        />
        <OptionComponent
          Icon={<FolderClosed />}
          Name="Collections"
          hidden={hidden}
        />
        <OptionComponent
          Icon={<UserRoundCheck />}
          hidden={hidden}
          Name="Subscribers"
        />
        <OptionComponent
          Icon={<CircleHelp />}
          Name="Support"
          ClassName="hidden sm:block mt-auto"
          hidden={hidden}
        />
        <OptionComponent
          Icon={<Settings />}
          Name="Settings"
          ClassName="hidden sm:block "
          hidden={hidden}
          navigation="/settings"
        />
      </ul>
    </aside>
  );
}

export default SideBar;
