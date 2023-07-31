import VideoCard from "./VideoCard";

function Feed({ list, page }) {
  return (
    <div className="col-span-6 grid ">
      <h2 className="font-bold text-2xl ml-4">{page}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 md:gap-4">
        {list?.map((video) => (
          <div key={video._id}>
            <VideoCard data={video} className="object-cover w-25 h-25" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
