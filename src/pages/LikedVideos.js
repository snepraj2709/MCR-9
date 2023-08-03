import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import { useData } from "../context/DataContext";

function LikedVideos() {
  const { state } = useData();
  const likedVideos = state?.allVideos.filter((video) => video.like);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 lg:max-w-6xl px-5 grow">
        <Sidebar className="sticky top-0" />
        <div className="col-span-6 flex flex-col ">
          <h2 className="font-bold text-2xl ml-2">Liked Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {likedVideos.length > 0 ? (
              likedVideos?.map((video) => (
                <div key={video._id} className="m-1">
                  <VideoCard data={video} />
                </div>
              ))
            ) : (
              <div>
                <p className="font-semibold text-lg ml-4 mt-4">
                  No liked video!
                </p>
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
