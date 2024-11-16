import React from "react";
import { videoDetails } from "../data";
import { ThumbsUp, ThumbsDown, Save } from "lucide-react";

export function VideoPage() {
  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0">
      <div className="flex w-full flex-wrap gap-4 p-4 lg:flex-nowrap">
        <div className="col-span-12 w-full">
          <div className="relative mb-4 w-full pt-[56%]">
            <div className="absolute inset-0">
              <video className="h-full w-full" controls="" autoplay="" muted="">
                <source
                  src={videoDetails.videoFile}
                  type={videoDetails.videoType}
                />
              </video>
            </div>
          </div>
        </div>
        <div
          className="group mb-4 w-full rounded-lg border p-4 duration-200 hover:bg-white/5 focus:bg-white/5"
          role="button"
        >
          <div className="flex flex-wrap gap-y-2">
            <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
              <h1 className="text-lg font-bold">{videoDetails.title}</h1>
              <p className="flex text-sm text-gray-200">
                <span>
                  {videoDetails.views} Views &nbsp; {videoDetails.createdAt}
                </span>
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
              <div className="flex items-center justify-between gap-x-4 md:justify-end lg:justify-between xl:justify-end">
                <div className="flex overflow-hidden rounded-lg border">
                  <button
                    className="group/btn flex items-center gap-x-2 border-r border-gray-700 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                    data-like={videoDetails.likeCount}
                    data-like-alt="3051"
                  >
                    <span className="inline-block w-5 group-focus/btn:text-[#ae7aff]">
                      <ThumbsUp />
                    </span>
                  </button>
                  <button
                    className="group/btn flex items-center gap-x-2 border-r border-gray-700 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                    data-like={videoDetails.dislikeCount}
                    data-like-alt="21"
                  >
                    <span className="inline-block w-5 group-focus/btn:text-[#ae7aff]">
                      <ThumbsDown />
                    </span>
                  </button>
                </div>
                <div className="relative block">
                  <button className="peer flex items-center gap-x-2 rounded-lg bg-white px-4  py-1.5 text-black">
                    <span className="inline-block w-5">
                      <Save />
                    </span>
                    Save
                  </button>
                </div>
                <div className="absolute right-0 top-full z-10 hidden w-64 overflow-hidden rounded-lg bg-[#121212] p-4 shadow shadow-slate-50/30 hover:block peer-focus:block">
                  <h3 className="mb-4 text-center text-lg font-semibold">
                    Save to playlist
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
