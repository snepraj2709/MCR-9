import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import { Header, Sidebar, VideoCard, Footer } from "../components/index";

function SingleCategory() {
  const { categoryName } = useParams();
  const { state } = useData();

  const videosOfThisCategory = state?.allVideos?.filter(
    (video) => video.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="col-span-6 flex flex-col ">
          <h2 className="font-bold text-2xl">{categoryName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            {videosOfThisCategory?.map((video) => (
              <div key={video._id}>
                <VideoCard data={video} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleCategory;
