import { useData } from "../context/DataContext";
import VideoCard from "./VideoCard";

function Suggestions() {
  const { state } = useData();
  return (
    <div className="flex flex-col space-y-4">
      <hr className="dark:border-gray-100 border-slate-900" />
      <h2 className="text-lg font-bold">More Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {state?.allVideos?.map((video) => (
          <div key={video._id}>
            <VideoCard data={video} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
