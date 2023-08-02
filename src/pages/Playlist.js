import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function Playlist() {
  const { state } = useData();
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="grid grid-cols-8 overflow-hidden mx-auto lg:max-w-6xl px-5">
        <Sidebar className="fixed top-0" />
        <div className="col-span-6">
          <h2 className="font-bold text-2xl  ml-8">Playlists</h2>
          <div className="flex flex-row m-2">
            {state?.playlists?.map((playlist) => (
              <div
                key={playlist.id}
                onClick={() => navigate(`/playlist/${playlist.name}`)}
                className="shadow-lg m-2 p-2 cursor-pointer rounded-lg group">
                <img
                  src={playlist.videos[0].thumbnail}
                  alt={playlist.name}
                  className="object-contain rounded-lg h-45 w-full group-hover:scale-110 transition-transform duration-150 ease-in-out "
                />
                <p className="text-lg mt-2 font-semibold text-center">
                  {playlist.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Playlist;
