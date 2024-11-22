import React from "react";
import { Plus } from "lucide-react";

function EmptyData({ icon, heading, sentence, LoggedInUser }) {
  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-sm text-center">
          <p className="mb-3 w-full">
            <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
              <span className="inline-block w-6">{icon}</span>{" "}
            </span>
          </p>
          <h5 className="mb-2 font-semibold">{heading}</h5>
          <p>{sentence} </p>
          {LoggedInUser ? (
            <button className="mt-4  justify-center inline-flex items-center gap-x-2 bg-[#ae7aff] px-3 py-2 font-semibold text-black">
              <Plus size={22} />
              New Video
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

export default EmptyData;
