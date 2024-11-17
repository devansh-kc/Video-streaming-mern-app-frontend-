import React from "react";
import { HorizontalCard, VerticalCard } from "../components/VideoCard/Card";
import { videos } from "../data";
export function HorizontalVideosPage() {
  return (
    <>
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
          {videos.map((video, idx) => {
            return <HorizontalCard VideoDetails={video} key={idx} />;
          })}
        </div>
      </section>
    </>
  );
}

export function VerticalVideoPage() {
  return (
    <>
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        {videos.map((video, idx) => {
          return (
            <div class="flex flex-col gap-4 p-4">
            <VerticalCard VideoDetails={video} key={idx} />
            </div>
          );
        })}
      </section>
    </>
  );
}
