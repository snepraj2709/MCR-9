import { useState } from "react";
import { useData } from "../context/DataContext";
import { MdSearch, FaUser, FaSun, FaMoon, FaYoutube } from "../utils/icons";
import { actions } from "../utils/constants";

function Header() {
  const theme = "dark";
  const { state, dispatch } = useData();
  const [input, setInput] = useState("");

  const filteredVideos = state?.allVideos.filter((video) =>
    video.title.toLowerCase().includes(input.toLowerCase())
  );

  function searchVideo(e) {
    setInput(e.target.value);
    dispatch({ type: actions.FilterVideo, payload: filteredVideos });
  }

  console.log(filteredVideos);

  return (
    <div className="flex justify-between my-2">
      <div className="flex">
        <FaYoutube className="w-6 h-6 mx-1 my-auto text-red-600" />
        <h2 className="hidden md:inline-block my-auto font-sans text-lg font-bold">
          Vidtune
        </h2>
      </div>

      <div className="flex border border-gray-200 shadow-lg bg-red-50 h-7 rounded-full">
        <MdSearch className="w-6 h-6 mx-1 my-auto" />
        <input
          type="text"
          value={input}
          onChange={(e) => searchVideo(e)}
          className="bg-transparent outline-none"
        />
      </div>
      <div className="flex space-x-2 mx-2">
        <FaUser className="w-6 h-6 mx-1 my-auto" />
        {theme === "dark" ? (
          <FaSun className="w-6 h-6 mx-1 my-auto" />
        ) : (
          <FaMoon className="w-6 h-6 mx-1 my-auto" />
        )}
      </div>
    </div>
  );
}

export default Header;
