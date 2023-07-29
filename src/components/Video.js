import { useNavigate } from "react-router-dom";
import { avatar } from "../utils/constants";
import {
  MdWatchLater,
  MdOutlineWatchLater,
  MdPlaylistAddCircle,
  MdPlaylistAddCheckCircle,
} from "../utils/icons";
import { useData } from "../context/DataContext";
import { useState } from "react";
import PlaylistModal from "./PlaylistModal";

function Video({ video }) {
  const [playlistModal, setPlaylistModal] = useState(false);
  const { title, views, thumbnail, creator, watchLater, playlists } = video;
  const { addToWatchlist, removeFromWatchlist, addNote, deleteNote } =
    useData();

  const playlistHandler = () => {
    setPlaylistModal(true);
  };

  function closePlaylistModal() {
    setPlaylistModal(false);
  }

  return (
    <div className="col-span-6 md:col-span-4 flex flex-col shadow-md p-4  mx-auto w-full">
      <div className="relative mx-auto">
        <img src={thumbnail} alt={title} className="object-center" />
        <button
          className="absolute top-2 right-2 cursor-pointer bg-white rounded-full p-1"
          onClick={() =>
            watchLater ? removeFromWatchlist(video) : addToWatchlist(video)
          }>
          {watchLater ? (
            <MdWatchLater className="w-6 h-6 text-blue-700" />
          ) : (
            <MdOutlineWatchLater className="w-6 h-6 text-blue-700" />
          )}
        </button>
      </div>
      <span className="flex text-sm font-small text-gray-800 pt-1">
        {views} Views | {creator}
      </span>
      <div className="flex justify-between mx-auto mt-3">
        <img src={avatar} alt={creator} className="w-10 h-10 rounded-full " />
        <div className="flex flex-row justify-start w-full">
          <h2 className="text-base font-medium pl-3">{title}</h2>
          <button onClick={playlistHandler}>
            {!playlists?.length > 0 ? (
              <MdPlaylistAddCircle className="w-6 h-6 " />
            ) : (
              <MdPlaylistAddCheckCircle className="w-6 h-6 " />
            )}
          </button>
          {playlistModal && (
            <PlaylistModal close={closePlaylistModal} currentVideo={video} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Video;
