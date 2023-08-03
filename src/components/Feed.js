import VideoCard from "./VideoCard";

function Feed({ list, page }) {
  return (
    <div className="col-span-6 grow">
      <h2 className="font-bold text-2xl ml-4">{page}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 md:gap-4">
        {list.length > 0 ? (
          list?.map((video) => (
            <div key={video._id}>
              <VideoCard data={video} className="object-cover w-25 h-25" />
            </div>
          ))
        ) : (
          <div>
            <p className="font-semibold text-lg ml-4 mt-4">
              No Videos in {page.toLowerCase()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Feed;
