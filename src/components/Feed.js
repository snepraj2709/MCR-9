import React from "react";
import VideoCard from "./VideoCard";

function Feed({ list, page }) {
  return (
    <div className="col-span-6 grid ">
      <h2 className="font-bold text-2xl">{page}</h2>
      <div className="flex flex-wrap">
        {list?.map((video) => (
          <div key={video._id} className="w-1/2 p-2">
            <VideoCard data={video} className="object-cover w-25 h-25" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
