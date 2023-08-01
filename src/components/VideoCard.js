import { avatar } from "../utils/constants";
import { MdWatchLater, MdOutlineWatchLater } from "../utils/icons";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function VideoCard({ data }) {
  const { _id, title, views, thumbnail, creator, watchLater } = data;
  const { addToWatchlist, removeFromWatchlist } = useData();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-2 drop-shadow-md shadow-lg max-w-md rounded-lg overflow-hidden">
      <div className="relative group">
        <img
          src={thumbnail}
          alt={title}
          className="object-contain rounded-lg h-45 w-full group-hover:scale-110 transition-transform duration-150 ease-in-out"
        />
        <button
          className="absolute top-2 right-2 cursor-pointer bg-white rounded-full p-1"
          onClick={() =>
            watchLater ? removeFromWatchlist(data) : addToWatchlist(data)
          }>
          {watchLater ? (
            <MdWatchLater className="w-6 h-6 text-blue-700 cursor-pointer" />
          ) : (
            <MdOutlineWatchLater className="w-6 h-6 text-blue-700 cursor-pointer" />
          )}
        </button>
      </div>
      <div
        className="flex flex-row justify-between mx-auto mt-3 cursor-pointer"
        onClick={() => navigate(`/${_id}`)}>
        <img src={avatar} alt={creator} className="w-10 h-10 rounded-full " />
        <div className="flex flex-col flex-grow justify-start">
          <h2 className="text-base font-medium pl-3 line-clamp-2">{title}</h2>
          <span className="flex text-sm font-medium text-gray-800 pl-3 line-clamp-1 space-x-1">
            <p className="line-clamp-1">{views} Views</p> |{" "}
            <p className="line-clamp-1">{creator}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
