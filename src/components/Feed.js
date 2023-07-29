import React from "react";
import { useData } from "../context/DataContext";
import VideoCard from "./VideoCard";

function Feed() {
  const { state } = useData();
  return (
    <div className="col-span-6 md:col-span-4 grid-flow-col md:grid-flow-row">
      {state?.allVideos?.map((video) => (
        <div key={video._id}>
          <VideoCard data={video} />
        </div>
      ))}
    </div>
  );
}

export default Feed;
