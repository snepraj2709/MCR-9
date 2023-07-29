import React from "react";
import {
  MdHome,
  MdExplore,
  MdWatchLater,
  MdPlaylistAddCircle,
} from "../utils/icons";

function Sidebar() {
  return (
    <div className="col-span-2 space-y-2 mt-5 p-5 sticky top-0">
      <span className="flex text-center m-2">
        <MdHome className="w-6 h-6 mx-1" />
        <b className="hidden md:inline-block">Home</b>
      </span>
      <span className="flex text-center m-2">
        <MdExplore className="w-6 h-6 mx-1" />
        <b className="hidden md:inline-block">Explore</b>
      </span>
      <span className="flex text-center m-2">
        <MdWatchLater className="w-6 h-6 mx-1" />
        <b className="hidden md:inline-block">WatchLater</b>
      </span>
      <span className="flex text-center m-2">
        <MdPlaylistAddCircle className="w-6 h-6 mx-1" />
        <b className="hidden md:inline-block">Playlist</b>
      </span>
    </div>
  );
}

export default Sidebar;
