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
    <div className="col-span-6 md:col-span-4 flex flex-col shadow-md p-4 justify-start w-full bg-white rounded-lg">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-70 rounded-lg"
        />
        <button
          className="absolute top-2 left-2 cursor-pointer bg-white rounded-full p-1 shadow-md"
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
      <span className="text-sm font-small text-gray-800 pt-1">
        {views} Views | {creator}
      </span>
      <div className="flex items-center mt-3">
        <img
          src={avatar}
          alt={creator}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex flex-row items-center w-full">
          <h2 className="text-lg font-medium">{title}</h2>
          <button onClick={playlistHandler}>
            {!playlists?.length > 0 ? (
              <MdPlaylistAddCircle className="w-6 h-6 ml-2 text-blue-700" />
            ) : (
              <MdPlaylistAddCheckCircle className="w-6 h-6 ml-2 text-blue-700" />
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
