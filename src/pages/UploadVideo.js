import { useState } from "react";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useData } from "../context/DataContext";
import { MdUpload } from "../utils/icons";
import { NavLink } from "react-router-dom";
import UploadVideoModal from "../components/UploadVideoModal";

function UploadVideo() {
  const { state } = useData();
  const [openModal, setOpenModal] = useState(false);
  const uploadedVideos = state?.uploadedVideo;
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 grow">
        <Sidebar />
        <div className="flex flex-col col-span-6">
          <div className="flex justify-between">
            <h2 className="font-bold text-2xl ml-4">
              Uploaded Videos ({uploadedVideos.length})
            </h2>
            <NavLink
              to="/upload"
              className="flex justify-start px-2 cursor-pointer bg-slate-100 h-10 rounded-full hover:text-blue-500 group my-2 text-gray-800"
              onClick={() => setOpenModal(true)}>
              <MdUpload className="sidebarIcon" />
              <b className="hidden md:inline-block my-auto">Upload</b>
            </NavLink>
          </div>

          <Feed list={uploadedVideos} />
          {openModal && (
            <div>
              <UploadVideoModal close={closeModal} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UploadVideo;
