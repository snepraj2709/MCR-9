import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useData } from "../context/DataContext";
import { MdSearch, FaUser, FaSun, FaMoon, FaYoutube } from "../utils/icons";
import { actions } from "../utils/constants";

function Header() {
  const theme = "light";
  const { state, dispatch } = useData();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const filteredVideos = state?.allVideos.filter((video) =>
    video.title.toLowerCase().includes(input.toLowerCase())
  );

  function searchVideo(e) {
    setInput(e.target.value);
    dispatch({ type: actions.FilterVideo, payload: filteredVideos });
  }

  console.log(filteredVideos);

  return (
    <div className="flex flex-row justify-between my-2 mx-auto lg:max-w-6xl w-100">
      <div className="flex md:ml-10">
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
          onClick={() =>
            location?.pathname !== "/explore" && navigate("/explore")
          }
          onChange={(e) => searchVideo(e)}
          className="bg-transparent outline-none"
        />
      </div>
      <div className="flex space-x-2 mx-2 md:mr-10">
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
