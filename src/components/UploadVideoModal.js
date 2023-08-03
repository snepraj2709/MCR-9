import { MdCancel } from "../utils/icons";
import { useState } from "react";
import { actions } from "../utils/constants";
import { toast } from "react-hot-toast";
import { useData } from "../context/DataContext";

function UploadVideoModal({ close }) {
  const { state, dispatch } = useData();
  const [uploadMedia, setUploadMedia] = useState({
    _id: state.allVideos.length + 1,
    like: false,
    title: "",
    views: 0,
    chips: [],
    thumbnail: "",
    src: "",
    category: "",
    creator: "You",
    watchLater: false,
    playlists: [],
  });

  const submitVideo = () => {
    console.log(uploadMedia);
    dispatch({ type: actions.UploadMedia, payload: uploadMedia });
    close();
    toast.success("Uploaded video successfully");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 dark:text-black">
      <div className="bg-slate-200 rounded-md p-4 w-96 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">Upload Video</p>
          <MdCancel
            onClick={close}
            className="cursor-pointer text-gray-500 hover:text-gray-800 w-6 h-6"
          />
        </div>
        <div id="1">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Title"
              className="h-8 rounded-md pl-2"
              value={uploadMedia.title}
              onChange={(e) =>
                setUploadMedia({ ...uploadMedia, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Thumbnail"
              className="h-8 rounded-md pl-2"
              value={uploadMedia.description}
              onChange={(e) =>
                setUploadMedia({ ...uploadMedia, thumbnail: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Source"
              className="h-8 rounded-md pl-2"
              value={uploadMedia.description}
              onChange={(e) =>
                setUploadMedia({ ...uploadMedia, src: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Category"
              className="h-8 rounded-md pl-2"
              value={uploadMedia.description}
              onChange={(e) =>
                setUploadMedia({ ...uploadMedia, category: e.target.value })
              }
            />
          </div>
          <div className="space-x-2">
            <button
              className="bg-blue-500 cursor-pointer hover:underline py-2 px-3 mt-2 rounded-full text-white text-sm"
              onClick={submitVideo}>
              Submit
            </button>
            <button
              className="border border-gray-800 cursor-pointer hover:underline py-2 px-3 mt-2 rounded-full text-sm"
              onClick={close}>
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadVideoModal;
