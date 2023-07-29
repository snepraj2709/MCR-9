import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function Playlist() {
  const { state } = useData();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-8 overflow-hidden mx-auto lg:max-w-6xl px-5">
      <Sidebar className="fixed top-0" />
      <div className="col-span-6">
        <h2 className="font-bold text-2xl text-center">Playlists</h2>
        <div className="flex flex-row">
          {state?.playlists?.map((playlist) => (
            <div
              key={playlist.id}
              onClick={() => navigate(`/playlist/${playlist.name}`)}
              className="mx-auto flex flex-col shadow-lg m-2 w-25 h-25 cursor-pointer">
              <img
                src={playlist.videos[0].thumbnail}
                alt={playlist.name}
                className="mx-auto "
              />
              <p className="text-base font-semibold text-center">
                {playlist.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
