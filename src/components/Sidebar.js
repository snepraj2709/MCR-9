import {
  MdHome,
  MdExplore,
  MdWatchLater,
  MdPlaylistAddCircle,
} from "../utils/icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const classes =
    "flex justify-start pl-1 cursor-pointer bg-slate-100 h-10 rounded-full w-auto hover:text-blue-500 group my-2";

  return (
    <div className="col-span-2 p-5">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdHome className="w-6 h-6 mx-2 my-auto group-hover:scale-125 transition-transform duration-150 ease-in-out" />
        <b className="hidden md:inline-block my-auto">Home</b>
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdExplore className="w-6 h-6 mx-2 my-auto group-hover:scale-125 transition-transform duration-150 ease-in-out" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/explore")}>
          Explore
        </b>
      </NavLink>
      <NavLink
        to="/watchlist"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdWatchLater className="w-6 h-6 mx-2 my-auto group-hover:scale-125 transition-transform duration-150 ease-in-out" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/watchlist")}>
          WatchLater
        </b>
      </NavLink>
      <NavLink
        to="/playlist"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdPlaylistAddCircle className="w-6 h-6 mx-2 my-auto group-hover:scale-125 transition-transform duration-150 ease-in-out" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/playlist")}>
          Playlist
        </b>
      </NavLink>
    </div>
  );
}

export default Sidebar;
