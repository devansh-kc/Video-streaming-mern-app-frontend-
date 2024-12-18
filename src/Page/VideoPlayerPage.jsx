import React, { useEffect, useState } from "react";
import { videos } from "../data";
import { ThumbsUp, ThumbsDown, Save, UserPlus, CodeSquare } from "lucide-react";
import Comment from "../components/CommentComponent/Comment";
import RelatedVideo from "../components/RelatedVideoComponent/RelatedVideo";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
function CheckBoxInput({ name, htmlfor }) {
  return (
    <li className="mb-2 last:mb-0">
      <label
        htmlFor={htmlfor}
        className="group/label inline-flex cursor-pointer items-center gap-x-3"
      >
        <input type="checkbox" className="peer hidden" id={htmlfor} />
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        {name}
      </label>
    </li>
  );
}

export function VideoPlayerPage() {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [userViewandDetails, setUserViewandDetails] = useState(null);
  const [comments, setComments] = useState(null);
  const [commentText, setCommentText] = useState("");
  async function FetchVideos(id) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/videos/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const { getLikeCommentAndSubscription, getVideoDetails } =
        response.data.data[0];

      setVideoDetails(getVideoDetails[0]);
      setUserViewandDetails(getLikeCommentAndSubscription[0]);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchComments(id) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/comments/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const commentInfo = response.data.data;
      setComments(commentInfo);
    } catch (error) {
      console.log(error);
    }
  }
  async function addLikes(id) {
    console.log(id);
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/likes/toggle/v/${id}`,
        {
          // headers: {"Content-Type":"application/json"}
        },
        {
          withCredentials: true,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCommentSubmit(event) {
    try {
      if (event.key == "Enter") {
        event.preventDefault();
        const respone = await axios.post(
          `http://localhost:8000/api/v1/comments/${id}`,
          {
            content: commentText,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },

            withCredentials: true,
          }
        );
        console.log(respone);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    FetchVideos(id);
    fetchComments(id);
  }, [id]);

  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0">
      <div className="flex w-full flex-wrap gap-4 p-4 lg:flex-nowrap">
        <div className="col-span-12 w-full">
          <div className="relative mb-4 w-full pt-[56%]">
            <div className="absolute inset-0">
              {videoDetails?.videoFile ? (
                <>
                  <video className="h-full w-full" controls>
                    <source
                      src={videoDetails.videoFile}
                      type={videoDetails.videoType || "video/mp4"}
                    />
                  </video>
                </>
              ) : (
                <p>Loading video...</p>
              )}
            </div>
          </div>
          <div
            className="group mb-4 w-full rounded-lg border p-4 duration-200 hover:bg-white/5 focus:bg-white/5"
            role="button"
          >
            <div className="flex flex-wrap gap-y-2">
              <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
                <h1 className="text-lg font-bold">{videoDetails?.title}</h1>
                <p className="flex text-sm text-gray-200">
                  <span>
                    {videoDetails?.views} Views &nbsp;{" "}
                    {format(videoDetails?.createdAt)}
                  </span>
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
                <div className="flex items-center justify-between gap-x-4 md:justify-end lg:justify-between xl:justify-end">
                  <div className="flex overflow-hidden justify-center align-middle items-center rounded-lg border">
                    <button
                      onClick={() => addLikes(id)}
                      className={`group/btn flex items-center gap-x-2 border-r border-gray-700 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)] ${
                        userViewandDetails?.likedByUser
                          ? "bg-[#ae7aff] text-white"
                          : ""
                      }`}
                      data-like={userViewandDetails?.totalLikesOnTheVideo} // data-like-alt="3051"
                    >
                      <span className="inline-block w-5 group-focus/btn:text-[#ae7aff]">
                        <ThumbsUp size={22} />
                      </span>
                    </button>
                    <button
                      className="group/btn flex items-center gap-x-2 border-r border-gray-700 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                      data-like={videoDetails?.dislikeCount}
                      // data-like-alt="21"
                    >
                      <span className="inline-block w-5 group-focus/btn:text-[#ae7aff]">
                        <ThumbsDown size={22} />
                      </span>
                    </button>
                  </div>
                  <div className="relative block">
                    <button className="peer flex items-center gap-x-2 rounded-lg bg-white px-4  py-1.5 text-black">
                      <span className="inline-block w-5">
                        <Save size={22} />
                      </span>
                      Save
                    </button>
                    <div className="absolute right-0 top-full z-10 hidden w-64 overflow-hidden rounded-lg bg-[#121212] p-4 shadow shadow-slate-50/30 hover:block peer-focus:block">
                      <h3 className="mb-4 text-center text-lg font-semibold">
                        Save to playlist
                      </h3>
                      <ul className="mb-4">
                        <CheckBoxInput
                          name="collection"
                          htmlfor="Collections-checkbox"
                        />
                        <CheckBoxInput
                          name="JavaScript Basics"
                          htmlfor="JavaScript Basics-checkbox"
                        />
                        <CheckBoxInput
                          name="C++ Tuts"
                          htmlfor="C++ Tuts-checkbox"
                        />
                        <CheckBoxInput
                          name="Feel Good Music"
                          htmlfor="Feel Good Music-checkbox"
                        />
                        <CheckBoxInput
                          name="Ed Sheeran"
                          htmlfor="Ed Sheeran-checkbox"
                        />
                      </ul>
                      <div className="flex flex-col">
                        <label
                          htmlFor="playlist-name"
                          className="mb-1 inline-block cursor-pointer"
                        >
                          Name
                        </label>
                        <input
                          className="w-full rounded-lg border border-transparent bg-white px-3 py-2 text-black outline-none focus:border-[#ae7aff]"
                          id="playlist-name"
                          placeholder="Enter playlist name"
                        />
                        <button className="mx-auto mt-4 rounded-lg bg-[#ae7aff] px-4 py-2 text-black">
                          Create new playlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <div className="mt-2 h-12 w-12 shrink-0">
                  <img
                    src={videoDetails?.owner_details?.avatar}
                    className="h-full w-full rounded-full"
                  />
                </div>
                <div className="block">
                  <p className="text-gray-200">
                    {videoDetails?.owner_details.username}
                  </p>
                  <p className="text-sm text-gray-400">
                    {userViewandDetails?.TotalNumberOfSubscriber}&nbsp;
                    Subscribers
                  </p>
                </div>
              </div>
              <div className="block">
                <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                  <UserPlus className="inline-block w-5 " />
                  <span>
                    <span className="group-focus/btn:hidden">Subscribe</span>
                    <span className="hidden group-focus/btn:block">
                      Subscribed
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <hr className="my-4 border-white" />

            <div className="h-5 overflow-hidden group-focus:h-auto">
              <p className="text-sm">{videoDetails?.description} </p>
            </div>
          </div>
          <button className="peer w-full rounded-lg border p-4 text-left duration-200 hover:bg-white/5 focus:bg-white/5 sm:hidden">
            <h6 className="font-semibold">
              {videoDetails?.commentCount} Comments...
            </h6>
          </button>
          <button className="peer w-full rounded-lg border p-4 text-left duration-200 hover:bg-white/5 focus:bg-white/5 sm:hidden">
            <h6 className="font-semibold">573 Comments...</h6>
          </button>
          <div className="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-[#121212] p-4 duration-200 hover:top-[67px] peer-focus:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
            <div className="block">
              <h6 className="mb-4 font-semibold">
                {userViewandDetails?.totalCommentOnTheVideo}&nbsp;Comments
              </h6>

              <input
                type="text"
                className="w-full rounded-lg border bg-transparent px-2 py-1 placeholder-white"
                placeholder="Add a Comment"
                value={commentText}
                onKeyDown={handleCommentSubmit}
                onChange={(e) => setCommentText(e.target.value)}
              />
            </div>
            <hr className="my-4 border-white" />

            {comments?.map((comment) => (
              <Comment comment={comment} key={comment._id} />
            ))}
          </div>
        </div>

        <div className="col-span-12 flex w-full shrink-0 flex-col gap-3 lg:w-[350px] xl:w-[400px]">
          {videos
            .filter((video) => video.isPublished)
            .map((video) => (
              <RelatedVideo videoDetails={video} key={video.id} />
            ))}
        </div>
      </div>
    </section>
  );
}
