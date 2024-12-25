import { Upload, X } from "lucide-react";
import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function UploadVideoModalComponent({ closeFunction }) {
  return (
    <div className="absolute inset-0 z-10 bg-black/50 px-4 pb-[86px] pt-4 sm:px-14 sm:py-8">
      <div className="h-full overflow-auto border bg-[#121212]">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-semibold">Upload Video</h2>
          <div className=" flex-row flex mx-3 my-3 ">
            <button className="group/btn mr-5 flex w-auto items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
              Save
            </button>
            <button
              onClick={closeFunction}
              className="group/btn mr-5 flex w-auto items-center gap-x-2 px-3 py-2 text-center font-bold text-white transition-all duration-150 ease-in-out  "
            >
              close
            </button>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-4 p-4">
          <div className="w-full border-2 border-dashed px-4 py-12 text-center">
            <div className="mb-4 inline-block w-24 text rounded-full bg-[#E4D3FF] ">
              <span className=" inline-block w-max h-max  rounded-full bg-[#E4D3FF] p-4 text-[#AE7AFF]">
                <Upload size={36} />
              </span>
            </div>
            <h6 className="mb-2 font-semibold">
              Drag and drop video files to upload
            </h6>
            <p className="text-gray-400">
              Your videos will be private untill you publish them.
            </p>
            <label
              htmlFor="upload-video"
              className="group/btn mt-4 inline-flex w-auto cursor-pointer items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
            >
              <input type="file" id="upload-video" className="sr-only" />
              Select File
            </label>
          </div>
          <div className="w-full">
            <label htmlFor="thumbnail" className="mb-1 inline-block">
              Thumbnail <sup>*</sup>
            </label>
            <input
              id="thumbnail"
              type="file"
              className="w-full border p-1 file:mr-4 file:border-none file:bg-[#ae7aff] file:px-3 file:py-1.5"
            ></input>
          </div>
          <div className="w-full">
            <label htmlFor="title" className="mb-1 inline-block">
              Title <sup>*</sup>
            </label>
            <input
              id="title"
              type="text"
              className="w-full border bg-transparent px-2 py-1 outline-none"
            ></input>
          </div>
          <div className="w-full">
            <label htmlFor="description" className="mb-1 inline-block">
              Description <sup>*</sup>
            </label>
            <textarea className="h-40 w-full resize-none border bg-transparent px-2 py-1 outline-none"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadVideoModalComponent;
