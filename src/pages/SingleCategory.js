import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";
import { useData } from "../context/DataContext";

function SingleCategory() {
  const { categoryName } = useParams();
  const { state } = useData();

  const videosOfThisCategory = state?.allVideos?.filter(
    (video) => video.category.toLowerCase() === categoryName.toLowerCase()
  );

  console.log(videosOfThisCategory);

  return (
    <div className="grid grid-cols-8  mx-auto lg:max-w-6xl px-5">
      <Sidebar className="fixed top-0" />
      <div className="col-span-6 flex flex-col">
        <h2 className="font-bold text-2xl">{categoryName}</h2>
        <div className="flex flex-wrap">
          {videosOfThisCategory?.map((video) => (
            <div key={video._id} className="w-1/2 p-2">
              <VideoCard data={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleCategory;
