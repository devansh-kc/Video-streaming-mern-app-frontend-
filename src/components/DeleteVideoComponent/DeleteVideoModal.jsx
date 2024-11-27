import { Trash2, X } from "lucide-react";
import React from "react";

function DeleteVideoModal() {
  return (
    <div className="fixed inset-0 top-[calc(66px)] z-10 flex- flex-col  bg-black/50 px-4 pb-[86px] pt-4  sm:top[calc(82px)] sm:px-14 sm:py-8">
      <div className=" mx-auto w-full max-w-lg overflow auto rounded-lg border border-gray-700 bg-[#121212] p-4">
        <div className="mb-6  flex-row justify-start gap-4 flex">
          <span className="p-1 rounded-full bg-red-200 text-red-700 h-8 w-8 shrink-0">
            <Trash2 />
          </span>
          <h2 className="text-xl  font-semibold  ">
            Delete Video
            <span className="block text-sm text-gray-300">
              Are you sure you want to delete this video? Once its deleted, you
              will not be able to recover it.
            </span>
          </h2>
          <button className="block ml-auto h-6 w-6 shrink-0">
            <X />
          </button>
        </div>
        <div className="grid grid-flow-col gap-4">
          <button className="border px-2 py-3 ">Cancel</button>
          <button className="px-2 py-3 text-white font-semibold bg-red-600 ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteVideoModal;
