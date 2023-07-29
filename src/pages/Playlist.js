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
      <div className="col-span-6 md:col-span-4">
        <h2 className="text-base font-bold text-center">Playlists</h2>
        {state?.playlists?.map((playlist) => (
          <div
            key={playlist.id}
            onClick={() => navigate(`/playlist/${playlist.name}`)}
            className="mx-auto shadow-lg m-2  w-auto cursor-pointer">
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
      <Suggestions />
    </div>
  );
}

export default Playlist;
