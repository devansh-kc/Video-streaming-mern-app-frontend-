import { Eye, Heart, Pencil, Plus, Trash, Trash2, User } from "lucide-react";
import React from "react";
import { videos } from "../data.jsx";
import EditVideoModalPage from "./EditVideoModalPage.jsx";

function TableRow({ VideoDetails }) {
  return (
    <tr className="group border">
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <div className="flex  justify-center">
          <label
            htmlFor={"vid-pub-" + VideoDetails.id}
            className="relative inline-block w-12 cursor-pointer overflow-hidden"
          >
            <input
              type="checkbox"
              id={"vid-pub-" + VideoDetails.id}
              className="peer sr-only"
              defaultChecked={VideoDetails.isPublished}
            />
            <span className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
          </label>
        </div>
      </td>
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <div className="flex justify-center">
          <span
            className={`inline-block rounded-2xl border px-1.5 py-0.5 ${
              VideoDetails.isPublished
                ? "border-green-600 text-green-600"
                : "border-red-600 text-red-600"
            }`}
          >
            {VideoDetails.isPublished ? "Published" : "Unpublished"}
          </span>
        </div>
      </td>
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <div className="flex justify-start gap-4">
          <img
            src={VideoDetails.thumbnail}
            alt={VideoDetails.title}
            className="h-10 w-10 rounded-full"
          />
          <h3 className="font-semibold">{VideoDetails.title}</h3>
        </div>
      </td>
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <div className="flex justify-center gap-4">
          <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
            {VideoDetails.likeCount} likes
          </span>
          <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
            {VideoDetails.dislikeCount} dislikes
          </span>
        </div>
      </td>
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        {new Date(VideoDetails.createdAt).toLocaleDateString()}
      </td>
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <div className="flex gap-4">
          <button className="h-5 w-5 hover:text-[#ae7aff]">
            <Trash2 />
          </button>
          <button className="h-5 w-5 hover:text-[#ae7aff]">
            <Pencil />
          </button>
        </div>
      </td>
    </tr>
  );
}

function AdminPage() {
  return (
    <div className="mx-auto flex  w-full max-w-7xl flex-col gap-y-6 px-4 py-8">
      <div className="flex flex-row justify-between gap-4">
        <div className="block">
          <h2 className="text-2xl font-bold">Welcome Back, React Patterns</h2>
          <p className="text-sm text-gray-300">
            Seamless Video Management, Elevated Results.
          </p>
        </div>
        <div className="block ">
          <button className="inline-flex px-4 py-2 gap-x-2 justify-center items-center bg-[#ae7aff] text-black">
            <Plus />
            Upload Video
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4  ">
        <div className="border p-4">
          <div className=" block mb-4">
            <span className="flex h-7 w-7 rounded-full items-center justify-center  bg-[#E4D3FF]  text-[#ae7aff]">
              <Eye />
            </span>
          </div>
          <p className=" text-gray-300">Total Views</p>
          <p className="text-3xl font-semibold">221,234</p>
        </div>
        <div className="border p-4 ">
          <div className=" block mb-4">
            <span className="flex h-7 w-7 rounded-full items-center justify-center  bg-[#E4D3FF]  text-[#ae7aff]">
              <User />
            </span>
          </div>

          <p className="text-gray-300">Total subscribers</p>
          <p className="text-3xl  font-semibold">4,053</p>
        </div>
        <div className="border p-4">
          <div className=" block mb-4">
            <span className="flex h-7 w-7 rounded-full items-center justify-center  bg-[#E4D3FF]  text-[#ae7aff]">
              <Heart />
            </span>
          </div>

          <p className="text-gray-300">Total likes</p>
          <p className="text-3xl  font-semibold">63,021</p>
        </div>
      </div>
      <div className="w-full overflow-auto">
        <table className="w-full min-w-[1200px] border-collapse border text-white">
          <thead>
            <tr>
              <th className="border-collapse border-b p-4"> Status</th>
              <th className="border-collapse border-b p-4"> Status</th>
              <th className="border-collapse border-b p-4"> Uploaded</th>
              <th className="border-collapse border-b p-4">Rating</th>
              <th className="border-collapse border-b p-4">Date Uploaded</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((videoDetail) => (
              <TableRow VideoDetails={videoDetail} key={videoDetail.id} />
            ))}
          </tbody>
        </table>
      </div>
      <EditVideoModalPage />
    </div>
  );
}

export default AdminPage;
