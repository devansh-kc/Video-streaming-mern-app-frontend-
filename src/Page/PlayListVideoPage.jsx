import React from "react";

function PlayListVideoPage() {
  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="flex flex-wrap gap-x-4 gap-y-10 p-4 xl:flex-nowrap">
        <div className="w-full shrink-0 sm:max-w-md xl:max-w-sm">
          <div className="relative mb-2 w-full pt-[56%]">
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image"
                className="h-full w-full"
              />
              <div className="absolute inset-x-0 bottom-0">
                <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-lg before:absolute before:inset-0 before:bg-black/40">
                  <div className="relative z-[1]">
                    <p className="flex justify-between">
                      <span className="inline-block">Play List</span>
                      <span className="inline-block">12 &nbsp; videos</span>
                    </p>
                    <p className="text-sm text-gray-200">
                      100K Views&nbsp;·&nbsp;2 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h6 className="mb-1 font-semibold">React Mastery</h6>
          <p className="flex text-sm text-gray-200">
            Master the art of building dynamic user interfaces with React.
          </p>
          <div className=" mt-6 flex items-center gap-x-3">
            <div className="h-16 w-16 shrink-0 ">
              <img
                src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="w-full">
              <h6 className="font-semibold">React Patterns</h6>
              <p className="text-sm text-gray-300">757K Subscribers</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-y-4">
          <div className="border">
            <div className="w-full max-w-3xl gap-x-4 sm:flex">
              <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
                <div className="w-full pt-[56%]">
                  <div className="absolute inset-0">
                    <img
                      src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="image"
                      className="h-full w-full"
                    />
                  </div>
                </div>
                <span className="absolute bottom-1 right-1 rounded bg-black px-1.5 text-sm">
                  20:45
                </span>
              </div>
              <div className="flex gap-x-2 px-2 sm:w-7/12 sm:px-0">
                <div className=" h-10 w-10 shrink-0 sm:hidden ">
                  <img
                    src="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
                    alt="codemaster"
                    className="h-full w-full rounded-full"
                  />
                </div>
                <div className="w-full">
                  <h6 className="mb-1 font-semibold sm:max-w-[75%]">
                    JavaScript Fundamentals: Variables and Data Types
                  </h6>
                  <p className="flex text-sm text-gray-200 sm:mt-3">
                    10.3k&nbsp;Views · 44 minutes ago
                  </p>
                  <div className="flex flex-row items-center gap-x-4">
                    <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block">
                      <img
                        src="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
                        alt="codemaster"
                        className="h-full w-full rounded-full"
                      />
                    </div>
                    <p className="text-sm text-gray-200">Code Master</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlayListVideoPage;
