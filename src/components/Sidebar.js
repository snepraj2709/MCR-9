import {
  MdHome,
  BiSolidLike,
  MdExplore,
  MdWatchLater,
  MdPlaylistAddCircle,
  MdUpload,
} from "../utils/icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const classes =
    "flex justify-start px-1 cursor-pointer bg-slate-100 h-10 rounded-full hover:text-blue-500 group my-2";

  return (
    <div className="col-span-2 p-5">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdHome className="sidebarIcon" />
        <b className="hidden md:inline-block my-auto">Home</b>
      </NavLink>
      <NavLink
        to="/liked"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <BiSolidLike className="sidebarIcon" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/liked")}>
          Liked
        </b>
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdExplore className="sidebarIcon" />
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
        <MdWatchLater className="sidebarIcon" />
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
        <MdPlaylistAddCircle className="sidebarIcon" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/playlist")}>
          Playlist
        </b>
      </NavLink>
      <NavLink
        to="/upload"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdUpload className="sidebarIcon" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/upload")}>
          Upload
        </b>
      </NavLink>
    </div>
  );
}

export default Sidebar;
