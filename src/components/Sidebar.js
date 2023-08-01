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
    <div className="col-span-2 space-y-2 p-5">
      <span className="flex justify-start pl-1 cursor-pointer bg-slate-100 h-10 rounded-full w-auto hover:text-blue-500 group">
        <MdHome className="w-6 h-6 mx-2 my-auto group-hover:scale-125 transition-transform duration-150 ease-in-out" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/")}>
          Home
        </b>
      </span>
      <span className="flex justify-start pl-1 cursor-pointer bg-slate-100 h-10 rounded-full w-auto group hover:text-blue-500">
        <MdExplore className="w-6 h-6 mx-2 my-auto group-hover:scale-125 transition-transform duration-150 ease-in-out" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/explore")}>
          Explore
        </b>
      </span>
      <span className="flex justify-start pl-1 cursor-pointer bg-slate-100 h-10 rounded-full w-auto group hover:text-blue-500">
        <MdWatchLater className="w-6 h-6 mx-2 my-auto group-hover:scale-125 transition-transform duration-150 ease-in-out" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/watchlist")}>
          WatchLater
        </b>
      </span>
      <span className="flex justify-start pl-1 cursor-pointer bg-slate-100 h-10 rounded-full w-auto group hover:text-blue-500">
        <MdPlaylistAddCircle className="w-6 h-6 mx-2 my-auto group-hover:scale-125 transition-transform duration-150 ease-in-out" />
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
