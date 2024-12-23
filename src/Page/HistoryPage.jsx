import React, { useEffect } from "react";
import { fetchHistory } from "../Slice/video.slice";
import { useDispatch, useSelector } from "react-redux";
import { VerticalCard } from "../components/Cards/Card.jsx";

function HistoryPage() {
  const dispatch = useDispatch();
  const { history, loading, error } = useSelector((state) => state.video);

  useEffect(() => {
    dispatch(fetchHistory());
  }, []);

  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="flex flex-col gap-4 p-4">
        {history.map((historyVideos) => (
          <VerticalCard
            VideoDetails={historyVideos}
            owner={historyVideos.owner}
            key={historyVideos?._id}
          />
        ))}
      </div>
    </section>
  );
}

export default HistoryPage;
