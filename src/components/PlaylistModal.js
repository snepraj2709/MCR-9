import { useState } from "react";
import { useData } from "../context/DataContext";
import { MdCancel, MdAddCircle } from "../utils/icons";
import { toast } from "react-hot-toast";
import { isUnique, mergedPlaylist, toggledPlaylist } from "../utils/function";

function PlaylistModal({ close, currentVideo }) {
  const [createNew, setCreateNew] = useState(false);
  const [nameOfPlaylist, setNameOfPlaylist] = useState("");
  const { state, createPlaylist, updatePlaylist } = useData();

  const merge = mergedPlaylist(currentVideo, state?.playlists);
  const [allPlaylists, setAllPlaylists] = useState(merge);

  const toggleCheckbox = (playlist) => {
    const updatePlaylists = toggledPlaylist(
      allPlaylists,
      playlist,
      currentVideo
    );
    setAllPlaylists(updatePlaylists);
  };

  const submitPlaylist = () => {
    const unique = isUnique(nameOfPlaylist, state?.playlists);
    if (unique) {
      updatePlaylist(allPlaylists);
      toast.success(`Added video to playlist`);
      close();
    } else {
      toast("A playlist with this name already exists", {
        icon: "⚠️",
      });
    }
    setNameOfPlaylist("");
  };

  const createNewPlaylist = () => {
    const unique = isUnique(nameOfPlaylist, state?.playlists);

    if (nameOfPlaylist.length > 0) {
      if (unique) {
        const newPlaylist = {
          id: state?.playlists.length + 1,
          name: nameOfPlaylist,
          videos: [{ ...currentVideo }],
        };
        setAllPlaylists([...allPlaylists, { ...newPlaylist }]);
        setCreateNew(false);
        createPlaylist(newPlaylist);
        toast.success(`Created ${nameOfPlaylist} Playlist`);
      } else {
        toast("A playlist with this name already exists", {
          icon: "⚠️",
        });
      }
    } else {
      toast("You can't create an empty playlist", {
        icon: "🙄",
      });
    }
    setNameOfPlaylist("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 dark:text-black">
      <div className="bg-slate-200 rounded-md p-4 w-96 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">Add to Playlist</p>
          <MdCancel
            onClick={close}
            className="cursor-pointer text-gray-500 hover:text-gray-800 w-6 h-6"
          />
        </div>
        <div id="1">
          {allPlaylists?.map((playlist) => (
            <div key={playlist?.id} className="mb-2" id="2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={playlist?.checked}
                  onChange={() => toggleCheckbox(playlist)}
                />
                <span>{playlist?.name}</span>
              </label>
            </div>
          ))}
          {createNew && (
            <div>
              <p>Name:</p>
              <input
                type="text"
                className="h-8 px-2 rounded-sm"
                value={nameOfPlaylist}
                onChange={(e) => setNameOfPlaylist(e.target.value)}
              />
              <button
                onClick={createNewPlaylist}
                className="bg-blue-500 cursor-pointer hover:underline py-2 px-4 mt-2 rounded-full text-white text-sm">
                Create
              </button>
            </div>
          )}
          <div className="flex items-center" onClick={() => setCreateNew(true)}>
            <MdAddCircle className="text-blue-500 mr-2 w-6 h-6" />
            <p className="text-blue-500 cursor-pointer hover:underline">
              Create new playlist
            </p>
          </div>
          <button
            className="bg-blue-500 cursor-pointer hover:underline py-2 px-4 mt-2 rounded-full text-white text-sm"
            onClick={submitPlaylist}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaylistModal;
