import { Header, Sidebar, Footer } from "../components/index";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function Playlist() {
  const { state } = useData();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="col-span-6">
          <h2 className=" font-bold text-2xl ">Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            {state?.playlists?.map((playlist) => (
              <div
                key={playlist.id}
                onClick={() => navigate(`/playlist/${playlist.name}`)}
                className="shadow-lg m-2 p-2 cursor-pointer rounded-lg group dark:bg-slate-800 [mask-type:luminance]">
                <img
                  src={playlist.videos[0].thumbnail}
                  alt={playlist.name}
                  className="object-contain rounded-lg h-45 w-full group-hover:scale-110 transition-transform duration-150 ease-in-out "
                />
                <p className="text-lg mt-4 font-semibold text-center">
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
