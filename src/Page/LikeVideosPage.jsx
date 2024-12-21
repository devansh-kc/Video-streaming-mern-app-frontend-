import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLikeVideos } from "../Slice/video.slice";
import { VerticalCard } from "../components/Cards/Card";

function LikeVideosPage() {
  const dispatch = useDispatch();
  const { likedVideo, loading, error } = useSelector((state) => state.video);
  console.log(likedVideo);

  useEffect(() => {
    dispatch(fetchLikeVideos());
  }, [dispatch]);

  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="flex flex-col gap-4 p-4">
        {likedVideo.map((VideosLikedByLoggedInUser) => {
          return (
            <VerticalCard
              VideoDetails={VideosLikedByLoggedInUser?.LikedVideo[0]}
              owner={VideosLikedByLoggedInUser?.LikedVideo[0]?.owner_details}
              key={VideosLikedByLoggedInUser?._id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default LikeVideosPage;
