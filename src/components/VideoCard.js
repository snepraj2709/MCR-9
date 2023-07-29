import { avatar } from "../utils/constants";
import {
  MdWatchLater,
  MdOutlineWatchLater,
  MdPlaylistAddCircle,
  MdPlaylistAddCheckCircle,
} from "../utils/icons";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function VideoCard({ data }) {
  const { _id, title, views, thumbnail, src, creator, watchLater } = data;
  const { addToWatchlist, removeFromWatchlist } = useData();
  const navigate = useNavigate();

  //console.log(data);

  return (
    <div className="flex flex-col shadow-md p-4 cursor-pointer max-w-md mx-auto">
      <div className="relative mx-auto" onClick={() => navigate(`/${_id}`)}>
        <img src={thumbnail} alt={title} className="object-center" />
        <button
          className="absolute top-2 right-2 cursor-pointer bg-white rounded-full p-1"
          onClick={() =>
            watchLater ? removeFromWatchlist(data) : addToWatchlist(data)
          }>
          {watchLater ? (
            <MdWatchLater className="w-6 h-6 text-blue-700" />
          ) : (
            <MdOutlineWatchLater className="w-6 h-6 text-blue-700" />
          )}
        </button>
      </div>
      <div className="flex justify-between mx-auto mt-3">
        <img src={avatar} alt={creator} className="w-10 h-10 rounded-full " />
        <div className="flex flex-col justify-start">
          <h2 className="text-base font-medium pl-3">{title}</h2>
          <span className="flex text-sm font-medium text-gray-800 pl-3">
            {views} Views | {creator}
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
