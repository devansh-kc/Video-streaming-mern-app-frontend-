import React from "react";

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
          <div class="absolute inset-0">
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
            <div class="mt-2 hidden h-10 w-10 shrink-0 md:block">
              <img
                src={VideoDetails.owner.avatar}
                alt={VideoDetails.owner.username}
                class="h-full w-full rounded-full"
              />
            </div>
            <p class="text-sm text-gray-200">{VideoDetails.owner.username}</p>
          </div>
          <p class="mt-2 hidden text-sm md:block">{VideoDetails.description}</p>
        </div>
      </div>
    </div>
  );
}
