import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";

function SingleCategory() {
  const { categoryName } = useParams();
  const { state } = useData();

  const videosOfThisCategory = state?.allVideos?.filter(
    (video) => video.category.toLowerCase() === categoryName.toLowerCase()
  );

  console.log(videosOfThisCategory);

  return (
    <div className="grid grid-cols-8  lg:max-w-6xl px-5">
      <Sidebar className="fixed top-0" />
      <div className="col-span-6 flex flex-col">
        <h2 className="font-bold text-2xl ml-8">{categoryName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {videosOfThisCategory?.map((video) => (
            <div
              key={video._id}
              className=" cursor-pointer group rounded-lg m-2">
              <VideoCard data={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleCategory;
