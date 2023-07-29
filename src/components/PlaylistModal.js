import { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import { MdCancel, MdAddCircle } from "../utils/icons";

function PlaylistModal({ close, currentVideo }) {
  const [createNew, setCreateNew] = useState(false);
  const [nameOfPlaylist, setNameOfPlaylist] = useState("");
  const [checkedPlaylists, setCheckedPlaylists] = useState([]);
  const { state, createPlaylist, updatePlaylist } = useData();

  const togglePlaylistCheckbox = (name) => {
    const isChecked = checkedPlaylists.includes(name);
    if (isChecked) {
      setCheckedPlaylists((prev) =>
        prev.filter((playlist) => playlist !== name)
      );
    } else {
      setCheckedPlaylists((prev) => [...prev, name]);
    }
  };
  console.log(checkedPlaylists);

  const submitPlaylist = () => {
    console.log(checkedPlaylists);
    updatePlaylist();
  };

  const createNewPlaylist = () => {
    const newPlaylist = {
      id: state.playlists.length + 1,
      name: nameOfPlaylist,
      videos: [{ ...currentVideo }],
    };
    setCreateNew(false);
    createPlaylist(newPlaylist);
  };

  useEffect(() => {
    if (currentVideo && currentVideo.playlists) {
      setCheckedPlaylists(currentVideo.playlists);
    }
  }, [currentVideo]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-slate-200 rounded-md p-4 w-96 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">Add to Playlist</p>
          <MdCancel
            onClick={close}
            className="cursor-pointer text-gray-500 hover:text-gray-800 w-6 h-6"
          />
        </div>
        <div id="1">
          {state?.playlists?.map((playlist) => (
            <div key={playlist?.id} className="mb-2" id="2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={currentVideo?.playlists?.includes(playlist.name)}
                  onChange={() => togglePlaylistCheckbox(playlist.name)}
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
