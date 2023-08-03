import { avatar } from "../utils/constants";
import {
  MdWatchLater,
  MdOutlineWatchLater,
  MdPlaylistAddCircle,
  MdPlaylistAddCheckCircle,
  MdEdit,
  MdDelete,
  BiLike,
  BiSolidLike,
} from "../utils/icons";
import { useData } from "../context/DataContext";
import { useState } from "react";
import PlaylistModal from "./PlaylistModal";
import NoteModal from "./NoteModal";
import { toast } from "react-hot-toast";

function Video({ video }) {
  const [playlistModal, setPlaylistModal] = useState(false);
  const { title, views, like, creator, src, watchLater, playlists, notes } =
    video;
  const {
    addToWatchlist,
    removeFromWatchlist,
    updateNote,
    likeVideo,
    removeLike,
  } = useData();
  const [noteModal, setNoteModal] = useState("");

  function closePlaylistModal() {
    setPlaylistModal(false);
  }

  function closeNoteModal() {
    setNoteModal(false);
  }

  function deleteNote() {
    const updatedVideo = { ...video, notes: {} };
    updateNote(updatedVideo);
    toast.error("Deleted Note");
  }

  return (
    <div className="col-span-6 md:col-span-4 flex flex-col shadow-md p-4 justify-start w-full rounded-lg px-10 pt-6 ">
      <div className="relative group w-full">
        <iframe
          title={title}
          src={src}
          className="object-cover aspect-video w-[100%] min-h-[20rem] rounded-lg group-hover:scale-110 transition-transform duration-150 ease-in-out"
        />
      </div>
      <span className="text-sm font-small text-gray-700 dark:text-gray-300 pt-4">
        {views} Views | {creator}
      </span>
      <div className="flex flex-col mt-3">
        <div className="flex">
          <img
            src={avatar}
            alt={creator}
            className="w-10 h-10 rounded-full mr-3"
          />
          <h2 className="text-lg font-medium">{title}</h2>
        </div>

        <div className="flex flex-row justify-between my-auto mt-2">
          <div className="flex bg-slate-100 dark:bg-slate-700 rounded-full p-2 ">
            <button
              className="cursor-pointer rounded-full"
              onClick={() => (like ? removeLike(video) : likeVideo(video))}>
              {like ? (
                <BiSolidLike className="w-8 h-8  dark:text-white" />
              ) : (
                <BiLike className="w-8 h-8 text-blue-700 dark:text-white" />
              )}
            </button>
            <span className="my-auto hidden lg:inline-block">Like</span>
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-700 rounded-full p-2 ">
            <button
              className="cursor-pointer rounded-full"
              onClick={() =>
                watchLater ? removeFromWatchlist(video) : addToWatchlist(video)
              }>
              {watchLater ? (
                <MdWatchLater className="w-8 h-8 text-blue-700 dark:text-white" />
              ) : (
                <MdOutlineWatchLater className="w-8 h-8  dark:text-white" />
              )}
            </button>
            <span className="my-auto hidden lg:inline-block">Watch Later</span>
          </div>

          <div className="flex bg-slate-100 dark:bg-slate-700 rounded-full p-2 ">
            <button onClick={() => setPlaylistModal(true)}>
              {!playlists?.length > 0 ? (
                <MdPlaylistAddCircle className="w-8 h-8 ml-2 text-blue-700 dark:text-white" />
              ) : (
                <MdPlaylistAddCheckCircle className="w-8 h-8 ml-2  dark:text-white" />
              )}
            </button>
            <span className="my-auto hidden lg:inline-block">Playlist</span>
          </div>

          <div className="flex bg-slate-100 dark:bg-slate-700 rounded-full p-2 ">
            <button onClick={() => setNoteModal(true)}>
              <MdEdit className="w-8 h-8 ml-2 text-blue-700 dark:text-white" />
            </button>
            <span className="my-auto hidden lg:inline-block">Notes</span>
          </div>
        </div>

        {noteModal && <NoteModal close={closeNoteModal} currentVideo={video} />}

        {playlistModal && (
          <PlaylistModal close={closePlaylistModal} currentVideo={video} />
        )}
      </div>
      {notes?.title && (
        <div className="w-full py-2 h-auto">
          <hr className="border-gray-800" />
          <h2 className="text-xl font-semibold py-2">My Notes</h2>
          <div className="flex space-x-2 align-middle justify-between">
            <div className="flex">
              <p className="text-lg font-normal my-auto">
                {notes?.title?.toUpperCase()}{" "}
              </p>
              <p className="text-base font-normal my-auto ">
                {notes?.description}
              </p>
            </div>
            <MdDelete
              className="w-8 h-8 ml-2 text-red-700"
              onClick={deleteNote}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Video;
