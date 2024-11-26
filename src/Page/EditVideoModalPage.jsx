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
        <div className="mb-6 flex flex-col gap-y-4">
          <div className="w-full">
            <label htmlFor="title" className="mb-1 inline-block">
              Title <sup>*</sup>
            </label>
            <input
              type="text"
              id="title"
              className="w-full border bg-transparent px-2 py-1 outline-none "
              value="State Management with Redux"
            />
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-y-4 ">
          <label htmlFor="description" className="inline-block items-center">
            Description <sup>*</sup>
          </label>
          <textarea
            className="h-40 w-full resize-none border bg-transparent px-2 py-1  overflow-y-scroll outline-none"
            id="description"
          >
            State Management with Redux is a comprehensive guidebook that delves
            into the principles and practices of managing application state in
            JavaScript-based web development. It explores the Redux library, a
            popular tool for handling state in complex applications, providing
            practical insights and best practices for effectively managing data
            flow. This book equips developers with the knowledge and skills
            needed to architect robust and maintainable front-end applications,
            making it an essential resource for anyone seeking to master state
            management in modern web development.
          </textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="py-3 px-3 font-semibold border">Cancel</button>
          <button className="py-3 px-3  font-semibold bg-[#ae7aff] text-black border">Update</button>
        </div>
      </div>
    </div>
  );
}

export default EditVideoModalPage;
