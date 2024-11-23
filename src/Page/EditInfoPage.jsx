import { Upload } from "lucide-react";
import React from "react";
import { NavbarList } from "../components/Cards/Card";

function EditInfoPage() {
  return (
    <section className="relative w-full pb-[70px]  sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="relative min-h-[150px] w-full pt-[16.28%]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress"
            alt="cover-photo"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <input type="file" className="hidden" id="cover-image" />
          <label
            htmlFor="cover-image"
            className="inline-block h-full w-full  cursor-pointer rounded-lg bg-white/60 p-2 text-[#ae7aff] hover:bg-white"
          >
            <Upload />
          </label>
        </div>
      </div>
      <div className="pb-4 px-4">
        <div className="flex flex-wrap gap-4 pb-4 pt-6">
          <span className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
            <img
              src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Channel"
              className="h-full w-full"
            />
          </span>
          <div className="mr-auto inline-block">
            <h1 className="font-bolg text-xl">React Patterns</h1>
            <p className="text-sm text-gray-400">@reactpatterns</p>
          </div>
          <div className="inline-block">
            <div className="inline-flex min-w-[145px]">
              <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                View Channel
              </button>
            </div>
          </div>
        </div>
        <ul className="p-4 m-2 no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
          <NavbarList
            headings="Personal Information"
            key={Math.random(1, 100)}
          />
          <NavbarList
            headings="Channel Information"
            key={Math.random(1, 100)}
          />
          <NavbarList headings="Change Passoword" key={Math.random(1, 100)} />
        </ul>
      </div>
    </section>
  );
}

export default EditInfoPage;
