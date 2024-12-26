import React from "react";
import { Link } from "react-router-dom";
import { ThumbsDown, ThumbsUp, Video } from "lucide-react";
import { format } from "timeago.js";

function formatDuration(sec) {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const secs = Math.floor(sec % 60);

  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(secs).padStart(2, "0");
  if (hours > 0) {
    const paddedHours = String(hours).padStart(2, "0");
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }

  // If minutes are greater than zero, include minutes and seconds in the output
  if (minutes > 0) {
    return `${paddedMinutes}:${paddedSeconds}`;
  }

  // Otherwise, return only seconds
  return `0:${paddedSeconds}`;
}

export function HorizontalCard({ VideoDetails }) {
  return (
    <div className="w-full" key={VideoDetails._id}>
      <div className="relative mb-2 pt-[56%]">
        <div className="absolute inset-0">
          <Link to={`/videopage/${VideoDetails._id}`}>
            <img
              src={VideoDetails.thumbnail}
              alt={VideoDetails.title}
              className="w-full h-full shrink-0"
            />
          </Link>
        </div>
        <span className="absolute bottom-1 right-1 rounded bg-black px-1.5 text-sm">
          {formatDuration(VideoDetails.duration)}
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
            <span>{VideoDetails.time} </span>
          </p>
          <p className="flex text-sm text-gray-400 py-1">
            {VideoDetails.owner.username}
          </p>
        </div>
      </div>
    </div>
  );
}

export function VerticalCard({ VideoDetails, owner }) {
  return (
    <div className="w-full max-w-3xl gap-x-4 md:flex">
      <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
        <div className="w-full pt-[56%]">
          <div className="absolute inset-0">
            <Link to={`/videopage/${VideoDetails._id}`}>
              <img
                src={VideoDetails.thumbnail}
                alt={VideoDetails.title}
                className="w-full h-full"
              />
            </Link>
          </div>
          <span className="absolute bottom-1 right-1 rounded bg-black px-1.5 text-sm">
            {formatDuration(VideoDetails.duration)}
          </span>
        </div>
      </div>
      <div className="flex gap-x-2 md:w-7/12">
        <div className="h-10 w-10 shrink-0 md:hidden">
          <img
            src={owner.avatar}
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
                src={owner.avatar}
                alt={owner.username}
                className="h-full w-full rounded-full"
              />
            </div>
            <p className="text-sm text-gray-200">{owner.username}</p>
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

export function PlayListVideoCard({ videoDetail }) {
  return (
    <div className="border">
      <div className="w-full max-w-3xl gap-x-4 sm:flex">
        <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
          <div className="w-full pt-[56%]">
            <div className="absolute inset-0">
              <img
                src={videoDetail.thumbnail}
                alt={videoDetail.title}
                className="h-full w-full"
              />
            </div>
          </div>
          <span className="absolute bottom-1 right-1 rounded bg-black px-1.5 text-sm">
            {videoDetail.duration}
          </span>
        </div>
        <div className="flex gap-x-2 px-2 sm:w-7/12 sm:px-0">
          <div className="w-full">
            <h6 className="mb-1 font-semibold sm:max-w-[75%]">
              {videoDetail.title}
            </h6>
            <p className="flex text-sm text-gray-200 sm:mt-3">
              {videoDetail.views}&nbsp;Views · {videoDetail.time}
            </p>
            <div className="flex flex-row items-center gap-x-4">
              <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block">
                <img
                  src={videoDetail.owner.avatar}
                  alt={videoDetail.owner.username}
                  className="h-full w-full rounded-full"
                />
              </div>
              <p className="text-sm text-gray-200">
                {videoDetail.owner.username}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TweetCards({ tweetDetails, owner }) {
  return (
    <div className="py-4">
      <div className="flex gap-3 border-b border-gray-700 py-4 last:border-b-transparent">
        <div className="h-14 w-14 shrink-0">
          <img
            src={owner.avatar}
            alt={owner.username}
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-1 flex items-center gap-x-2">
            <span className="font-semibold">{owner.fullName}</span>
            <span className="inline-block text-sm text-gray-400">
              {format(tweetDetails.createdAt)}
            </span>
          </h4>
          <p className="mb-2">{tweetDetails.content}</p>
          <div className="flex gap-4">
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
              data-like-count={tweetDetails.likeCount}
              data-like-count-alt="424"
            >
              <ThumbsUp
                size={18}
                className=" text-inherit group-focus:text-[#ae7aff]"
              />
            </button>
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
              data-dislike-count={tweetDetails.dislikeCount}
              data-dislike-count-alt="88"
            >
              <ThumbsDown
                size={18}
                className=" text-inherit group-focus:text-[#ae7aff]"
              />
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export function SubscribersCard({ subscriberDetails }) {
  return (
    <div className="flex  w-full justify-between">
      <div className="flex items-center gap-x-2">
        <div className="w-16 h-16 shrink-0">
          <img
            className="rounded-full w-full h-full"
            src={subscriberDetails.avatar}
            alt={subscriberDetails.fullName}
          />
        </div>
        <div className="block">
          <p className="font-semibold">{subscriberDetails.fullName}</p>
          <p className="text-sm text-gray-300">
            {subscriberDetails.subscribers}&nbsp;Subscribers
          </p>
        </div>{" "}
      </div>
      <div className="block">
        <button className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white">
          <span className="hidden group-focus/btn:inline">Subscribed</span>
          <span className="group-focus/btn:hidden">Subscribe</span>
        </button>
      </div>
    </div>
  );
}

export function NavbarList({ headings, onClick, className }) {
  return (
    <li className="w-full">
      <button onClick={onClick} className={className}>
        {headings}
      </button>
    </li>
  );
}
