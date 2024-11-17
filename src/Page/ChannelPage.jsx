import React, { useState } from "react";
import { Folder, Play, UserPlus } from "lucide-react";
import {
  ChannelCard,
  HorizontalCard,
  PlayListCard,
} from "../components/VideoCard/Card";
import { playlistList, videos } from "../data";
import EmptyData from "../components/EmptyDataComponent/EmptyData";

function ChannelPage() {
  let notShowVideos = false;
  const [activeTab, setActiveTab] = useState("videos");

  const renderContent = () => {
    switch (activeTab) {
      case "videos":
        return notShowVideos ? (
          <div className="m-4 p-4 align-middle text-center">
            <EmptyData
              icon={<Play />}
              heading="No videos uploaded"
              sentence="This page has yet to upload a video. Search another page in order to find more videos."
            />
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
            {videos.map((video) => (
              <ChannelCard videoDetails={video} key={video.id} />
            ))}
          </div>
        );

      case "playlist":
        return notShowVideos ? (
          <div className="m-4 p-4 align-middle text-center">
            <EmptyData
              icon={<Folder />}
              heading="No playlist created"
              sentence="There are no playlist created on this channel."
            />
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(410px,_1fr))] gap-4 p-4">
            {playlistList.map((video) => (
              <PlayListCard videoDetails={video} key={video.id} />
            ))}
          </div>
        );
      case "Tweets":
        return <Tweets />;
      case "Subscribed":
        return <Subscribed />;
      default:
        return null;
    }
  };
  return (
    <section className="w-full pb-[70px]  sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="relative min-h-[150px] w-full pt-[16.28%]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress"
            alt="cover-photo"
          />
        </div>
      </div>
      <div className="pb-4 px-4">
        <div className="flex flex-wrap gap-4 pb-4 pt-6">
          <span className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
            <img
              src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Channel"
              className="h-full w-full"
            />
          </span>
          <div className="mr-auto inline-block">
            <h1 className="font-bolg text-xl">React Patterns</h1>
            <p className="text-sm text-gray-400">@reactpatterns</p>
            <p className="text-sm text-gray-400">
              600k Subscribers · 220 Subscribed
            </p>
          </div>
          <div className="inline-block">
            <div className="inline-flex min-w-[145px]">
              <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                <span className="inline-block w-5">
                  <UserPlus className="inline-block w-5 " />
                </span>
                <span className="group-focus/btn:hidden">Subscribe</span>
                <span className="hidden group-focus/btn:block">
                  Subscribed
                </span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ul className="p-4 m-2 no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
        <li className="w-full">
          <button
            onClick={() => setActiveTab("videos")}
            className={`w-full border-b-2 ${
              activeTab === "videos"
                ? "border-[#ae7aff] bg-white text-[#ae7aff]"
                : "border-none text-gray-400"
            }  text-gray-400  px-3 py-1.5 `}
          >
            Videos
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={() => setActiveTab("playlist")}
            className={`w-full border-b-2 ${
              activeTab === "playlist"
                ? "border-[#ae7aff] bg-white text-[#ae7aff]"
                : "border-none text-gray-400"
            }  text-gray-400  px-3 py-1.5 `}
          >
            PlayList
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={() => setActiveTab("tweets")}
            className={`w-full border-b-2 ${
              activeTab === "tweets"
                ? "border-[#ae7aff] bg-white text-[#ae7aff]"
                : "border-none text-gray-400"
            }  text-gray-400  px-3 py-1.5 `}
          >
            Tweets
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={() => setActiveTab("Subscribed")}
            className={`w-full border-b-2 ${
              activeTab === "Subscribed"
                ? "border-[#ae7aff] bg-white text-[#ae7aff]"
                : "border-none text-gray-400"
            }  text-gray-400  px-3 py-1.5 `}
          >
            Subscribed
          </button>
        </li>
      </ul>
      {renderContent()}
    </section>
  );
}

export default ChannelPage;