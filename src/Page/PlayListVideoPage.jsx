import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { playlistList, videoDetails } from "../data";
import { PlayListVideoCard } from "../components/Cards/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPlayListById } from "../Slice/playlist.slice";
import { format } from "timeago.js";

function PlayListVideoPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userPlayList } = useSelector((state) => state.playList);
  useEffect(() => {
    dispatch(fetchUserPlayListById(id));
  }, [id]);

  // const playList = playlistList[id - 1];
  // playList.videos = playList?.videos.filter((video) => video.isPublished);

  return (
    // <h1> h1</h1>

    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="flex flex-wrap gap-x-4 gap-y-10 p-4 xl:flex-nowrap">
        <div className="w-full shrink-0 sm:max-w-md xl:max-w-sm">
          <div className="relative mb-2 w-full pt-[56%]">
            <div className="absolute inset-0">
              <img
                src={userPlayList[0]?.Video_details[0]?.thumbnail}
                alt={userPlayList[0]?.Video_details[0]?.title}
                className="h-full w-full"
              />
              <div className="absolute inset-x-0 bottom-0">
                <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-lg before:absolute before:inset-0 before:bg-black/40">
                  <div className="relative z-[1]">
                    <p className="flex justify-between">
                      <span className="inline-block">Play List</span>
                      <span className="inline-block">
                        {userPlayList[0]?.Video_details.length} &nbsp; videos
                      </span>
                    </p>
                    <p className="text-sm text-gray-200">
                      {userPlayList[0]?.totalViews} Views&nbsp;·&nbsp;
                      {format(userPlayList[0]?.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h6 className="mb-1 font-semibold">{userPlayList[0]?.name}</h6>
          <p className="flex text-sm text-gray-200">
            {userPlayList[0]?.description}
          </p>

          <div className=" mt-6 flex items-center gap-x-3">
            <div className="h-16 w-16 shrink-0 ">
              <img
                src={userPlayList[0]?.owner.avatar}
                alt={userPlayList[0]?.owner.username}
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="w-full">
              <h6 className="font-semibold">
                {userPlayList[0]?.owner.username}
              </h6>
              <p className="text-sm text-gray-300">757K Subscribers</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-y-4">
          {userPlayList[0]?.Video_details.map((videoDetail) => {
            return (
              <PlayListVideoCard
                owner={userPlayList[0]?.owner}
                videoDetail={videoDetail}
                key={videoDetail.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PlayListVideoPage;
