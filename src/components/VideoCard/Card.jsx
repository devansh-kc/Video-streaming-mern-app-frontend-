import React from "react";
import { Link } from "react-router-dom";

export function HorizontalCard({ VideoDetails }) {
  return (
    <div className="w-full">
      <div className="relative mb-2 pt-[56%]">
        <div className="absolute inset-0">
          <img
            src={VideoDetails.thumbnail}
            alt={VideoDetails.title}
            className="w-full h-full"
          />
        </div>
        <span className="absolute bottom-1 right-1 rounded bg-black px-1.5 text-sm">
          {VideoDetails.duration}
        </span>
      </div>
      <div className="flex gap-x-2">
        <div className="h-10 w-10 shrink-0">
          <img
            src={VideoDetails.owner.avatar}
            alt="another image"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h6 className="mb-1 font-semibold">{VideoDetails.title}</h6>

          <p className="flex text-sm text-gray-300 justify-between">
            <span>{VideoDetails.views} Views</span>
            <span>{VideoDetails.time} minutes ago</span>
          </p>
          <p className="flex text-sm text-gray-400 py-1">
            {VideoDetails.owner.username}
          </p>
        </div>
      </div>
    </div>
  );
}

export function VerticalCard({ VideoDetails }) {
  return (
    <div className="w-full max-w-3xl gap-x-4 md:flex">
      <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
        <div className="w-full pt-[56%]">
          <div className="absolute inset-0">
            <img
              src={VideoDetails.thumbnail}
              alt={VideoDetails.title}
              className="w-full h-full"
            />
          </div>
          <span className="absolute bottom-1 right-1 rounded bg-black px-1.5 text-sm">
            {VideoDetails.duration}
          </span>
        </div>
      </div>
      <div className="flex gap-x-2 md:w-7/12">
        <div className="h-10 w-10 shrink-0 md:hidden">
          <img
            src={VideoDetails.owner.avatar}
            alt="another image"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h6 className="mb-1 font-semibold md:max-w-[75%]">
            {VideoDetails.title}
          </h6>
          <p className="flex text-sm text-gray-300 ">
            {VideoDetails.views} Views &nbsp;
            {VideoDetails.time}
          </p>
          <div className="flex items-center gap-x-4">
            <div className="mt-2 hidden h-10 w-10 shrink-0 md:block">
              <img
                src={VideoDetails.owner.avatar}
                alt={VideoDetails.owner.username}
                className="h-full w-full rounded-full"
              />
            </div>
            <p className="text-sm text-gray-200">
              {VideoDetails.owner.username}
            </p>
          </div>
          <p className="mt-2 hidden text-sm md:block">
            {VideoDetails.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ChannelCard({ videoDetails }) {
  return (
    <div className="w-full">
      <div className="relative mb-2 w-full pt-[56%]">
        <div className="absolute inset-0">
          <img src={videoDetails.thumbnail} className="h-full w-full" />
        </div>
        <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
          {videoDetails.duration}
        </span>
      </div>
      <h6 className="mb-1 font-semibold">{videoDetails.title}</h6>
      <p className="flex text-sm text-gray-200">
        {videoDetails.views} Views &nbsp; {videoDetails.time} ago
      </p>
    </div>
  );
}

export function PlayListCard({ videoDetails }) {
  return (
    <div className="w-full">
      <div className="relative mb-2 w-full pt-[56%]">
        <div className="absolute inset-0">
          <Link to={`/channel/playlist/${videoDetails.id}`}>
            <img
              src={videoDetails.videos[0].thumbnail}
              alt={videoDetails.title}
              className="h-full w-full"
            />
          </Link>
          <div className="absolute inset-x-0 bottom-0">
            <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
              <div className="relative z-[1]">
                <p className="flex justify-between">
                  <span className="inline-block">Playlist</span>
                  <span className="inline-block"> videos</span>
                </p>
                <p className="text-sm text-gray-200">
                  {videoDetails.views} Views ·  {videoDetails.createdAt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6 className="mb-1 font-semibold">{videoDetails.name}</h6>
      <p className="flex text-sm text-gray-200">{videoDetails.description}</p>
    </div>
  );
}
