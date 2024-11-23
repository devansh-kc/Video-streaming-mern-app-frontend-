import { CircleCheck, Cross, Film, Loader, Loader2, X } from "lucide-react";
import React from "react";

function VideoUploadProgress() {
  const Loading = true;
  return (
    <div className="absolute inset-x-0 top-0 z-10 flex h-[calc(100vh-66px)] items-center justify-center bg-black/50 px-4 pb-[86px] pt-4 sm:h-[calc(100vh-82px)] sm:px-14 sm:py-8">
      <div className=" w-full max-w-lg overflow-auto rounded-lg border border-gray-700 bg-[#121212] p-4">
        <div className="mb-6 flex items-start justify-between">
          <h2 className="text-xl font-semibold">
            {" "}
            Uploading Video
            <span className="block text-sm text-gray-300">
              Track your video uploading process
            </span>
          </h2>
          <button className="h-6 w-6">
            <X />
          </button>
        </div>

        <div className="border p-3 flex mb-6 gap-x-2">
          <div className="w-8 h-8 shrink-0">
            <span className="inline-block w-full rounded-full bg-[#E4D3FF] p-1 text-[#AE7AFF]">
              <Film />
            </span>
          </div>
          <div className="flex flex-col">
            <h6>Dashboard prototype recording.mp4</h6>
            <p className="text-sm">16MB</p>
            <div className="mt-2">
              {Loading ? (
                <Loader2 className="mr-2 inline-block h-5 w-5 animate-spin text-[#9c76d8] " />
              ) : (
                <CircleCheck className="mr-2 inline-block h-5 w-5 text-[#9c76d8] " />
              )}
              <span>Uploading...</span>
            </div>
          </div>
        </div>
        <div className="grid  grid-flow-col mt-2  ">
          <button className="border border-white px-4 py-3 m-2 ">Cancel</button>
          <button
            className="border border-white text-black disabled:bg-[#E4D3FF] m-2 px-4 py-3 bg-[#Ae7Aff]"
            disabled={Loading}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoUploadProgress;
