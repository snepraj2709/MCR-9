import React from "react";
import {
  MdHome,
  MdExplore,
  MdWatchLater,
  MdPlaylistAddCircle,
} from "../utils/icons";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="col-span-2 space-y-2 mt-5 p-5 sticky top-0">
      <span className="flex text-center m-2 cursor-pointer">
        <MdHome className="w-6 h-6 mx-1" />
        <b className="hidden md:inline-block" onClick={() => navigate("/")}>
          Home
        </b>
      </span>
      <span className="flex text-center m-2 cursor-pointer">
        <MdExplore className="w-6 h-6 mx-1" />
        <b
          className="hidden md:inline-block"
          onClick={() => navigate("/explore")}>
          Explore
        </b>
      </span>
      <span className="flex text-center m-2 cursor-pointer">
        <MdWatchLater className="w-6 h-6 mx-1" />
        <b
          className="hidden md:inline-block"
          onClick={() => navigate("/watchlist")}>
          WatchLater
        </b>
      </span>
      <span className="flex text-center m-2 cursor-pointer">
        <MdPlaylistAddCircle className="w-6 h-6 mx-1" />
        <b
          className="hidden md:inline-block"
          onClick={() => navigate("/playlist")}>
          Playlist
        </b>
      </span>
    </div>
  );
}

export default Sidebar;
