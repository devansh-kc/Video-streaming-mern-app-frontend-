import React from "react";
import { HorizontalCard, VerticalCard } from "../components/Cards/Card";
import { videos } from "../data";
import { useParams, useSearchParams } from "react-router-dom";
export function HorizontalVideosPage() {
  return (
    <>
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
          {videos.map((video) => {
            return <HorizontalCard VideoDetails={video}  />;
          })}
        </div>
      </section>
    </>
  );
}

export function VerticalVideoPage() {
  const [searchParams] = useSearchParams();
  const Title = decodeURI(searchParams.get("query"));
  console.log(Title)
  const filteredData = videos.filter((video) => video.title.includes(Title));

  return (
    <>
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        {filteredData.map((video, idx) => {
          return (
            <div className="flex flex-col gap-4 p-4">
              <VerticalCard VideoDetails={video} key={idx} />
            </div>
          );
        })}
      </section>
    </>
  );
}
