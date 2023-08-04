import { Header, Sidebar, Feed, Footer } from "../components/index";
import { useData } from "../context/DataContext";

function Watchlist() {
  const { state } = useData();
  const watchlist = state?.allVideos?.filter((video) => video.watchLater);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8  lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="col-span-6 flex flex-col">
          <h2 className="font-bold text-2xl">Watchlist</h2>
          <Feed list={watchlist} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Watchlist;
