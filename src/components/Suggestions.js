import { useData } from "../context/DataContext";
import VideoCard from "./VideoCard";

function Suggestions() {
  const { state } = useData();
  return (
    <div className="hidden md:col-span-2 md:inline-block">
      <h2 className="text-base font-bold text-center">More Videos</h2>
      {state?.allVideos?.map((video) => (
        <div key={video._id} className="my-2">
          <VideoCard data={video} />
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
