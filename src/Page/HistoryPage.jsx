import React, { useEffect } from "react";
import { fetchHistory } from "../Slice/video.slice";
import { useDispatch, useSelector } from "react-redux";
import { VerticalCard } from "../components/Cards/Card.jsx";

function HistoryPage() {
  const dispatch = useDispatch();
  const { history, loading, error } = useSelector((state) => state.video);
  // console.log(history, loading, error);
  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);
  console.log(history);

  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      {history.map((userVideoHistory) => (
        <div className="flex flex-col gap-4 p-4">
          <VerticalCard
            VideoDetails={userVideoHistory}
            key={userVideoHistory._id}
          />
        </div>
      ))}
    </section>
  );
}

export default HistoryPage;
