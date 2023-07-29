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
      <span className="flex justify-start m-2 cursor-pointer bg-slate-100 h-10  rounded-full w-auto outline-1">
        <MdHome className="w-6 h-6 mx-1 my-auto" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/")}>
          Home
        </b>
      </span>
      <span className="flex text-center m-2 cursor-pointer bg-slate-100 h-10  rounded-full w-36">
        <MdExplore className="w-6 h-6 mx-1 my-auto" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/explore")}>
          Explore
        </b>
      </span>
      <span className="flex text-center m-2 cursor-pointer bg-slate-100 h-10  rounded-full w-36">
        <MdWatchLater className="w-6 h-6 mx-1 my-auto" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/watchlist")}>
          WatchLater
        </b>
      </span>
      <span className="flex text-center m-2 cursor-pointer bg-slate-100 h-10  rounded-full w-36">
        <MdPlaylistAddCircle className="w-6 h-6 mx-1 my-auto" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/playlist")}>
          Playlist
        </b>
      </span>
    </div>
  );
}

export default Sidebar;
