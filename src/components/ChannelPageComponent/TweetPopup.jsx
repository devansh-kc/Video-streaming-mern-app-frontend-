import React from "react";
import { X, Smile, Ellipsis } from "lucide-react";
export function TweetPopup({ content, onClose, onChange }) {
  return (
    <div className="absolute inset-x-0 top-0 z-10 flex h-[calc(100vh-66px)] items-center justify-center bg-black/50 px-4 pb-[86px] pt-4 sm:h-[calc(100vh-82px)] sm:px-14 sm:py-8">
      <div className=" w-full max-w-lg overflow-auto rounded-lg border border-gray-700 bg-[#121212] p-4">
        <div className="mb-6 flex items-start justify-between">
          <h2 className="text-xl font-semibold">
            Write down the Content for the Tweet
            <span className="block text-sm text-gray-300">Write something</span>
          </h2>
          <button className="h-6 w-6" onClick={onClose}>
            <X />
          </button>
        </div>
        <div className=" p-2  mb-5 gap-x-2">
          <textarea
            className="bg-transparent resize-none w-full h-full border p-5"
            value={content}
            onChange={(e) => onChange(e.target.value)}
          ></textarea>
          <div className="flex  items-center justify-end gap-x-3 px-3 mt-2">
            <button className="inline-block h-5 w-5 hover:text-[#ae7aff]">
              <Smile />
            </button>
            <button className="inline-block h-5 w-5 hover:text-[#ae7aff]">
              <Ellipsis />
            </button>
            <button className="inline-block h-max w-max py-2 font-semibold px-3 bg-[#ae7aff] text-black">
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
