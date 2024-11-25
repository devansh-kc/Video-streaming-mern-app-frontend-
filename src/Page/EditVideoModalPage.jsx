import React from "react";
import { X } from "lucide-react";

function EditVideoModalPage() {
  return (
    <div className="fixed inset-0 top-[calc(66px)] z-10 flex flex-col bg-black/50 px-4 pb-[86px] pt-4 sm:top[calc(82px)] sm:px-14 sm:py-8">
      <div className="mx-auto w-full max-w-lg overflow-auto rounded-lg border border-gray-700 bg-[#121212] p-4">
        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-xl font-semibold">
            Edit Video
            <span className="block text-sm text-gray-300">
              Share where you've worked on your profile.
            </span>
          </h2>
          <button className="h-6 w-6">
            <X />
          </button>
        </div>
        <label htmlFor="thumbnail" className="mb-1 inline-block">
          Thumbnail <sup>*</sup>
        </label>
        <label
          htmlFor="thumbnail"
          className="relative mb-4 block cursor-pointer border border-dashed p-2 after:absolute after:inset-0 after:bg-transparent hover:after:bg-black/10"
        >
          <input type="file" className="sr-only" id="thumbnail" />
          <img
            src="https://images.pexels.com/photos/7775641/pexels-photo-7775641.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
            alt="State Management with Redux"
          />
        </label>
      </div>
      <div className="mb-6 flex flex-col gap-y-4">
        <div className="w-full"></div>
        <div className="w-full"></div>

      </div>
      <div className="mb-6 flex flex-col gap-y-4"></div>

    </div>
  );
}

export default EditVideoModalPage;
