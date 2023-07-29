import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";
import { useData } from "../context/DataContext";

function Playlist() {
  const { state } = useData();

  return (
    <div className="grid grid-cols-8 overflow-hidden mx-auto lg:max-w-6xl px-5">
      <Sidebar className="fixed top-0" />
      <div className="col-span-6 md:col-span-4">
        <h2>Playlists</h2>
        {state?.playlists?.map((playlist) => (
          <div key={playlist.id}>
            <img src={playlist.videos[0].thumbnail} alt={playlist.name} />
            <p className="text-base font-semibold">{playlist.name}</p>
          </div>
        ))}
      </div>
      <Suggestions />
    </div>
  );
}

export default Playlist;
