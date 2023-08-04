import { Header, Sidebar, VideoCard, Footer } from "../components/index";
import { useData } from "../context/DataContext";

function LikedVideos() {
  const { state } = useData();
  const likedVideos = state?.allVideos.filter((video) => video.like);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="col-span-6 flex flex-col ">
          <h2 className="font-bold text-2xl ">Liked Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            {likedVideos.length > 0 ? (
              likedVideos?.map((video) => (
                <div key={video._id}>
                  <VideoCard data={video} />
                </div>
              ))
            ) : (
              <div>
                <p className="font-semibold text-lg mt-4">No liked video!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LikedVideos;
