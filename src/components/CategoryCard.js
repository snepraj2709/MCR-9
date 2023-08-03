import { actions } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

function CategoryCard({ currentCategory }) {
  const { thumbnail, category, description } = currentCategory;
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  const clickHandler = () => {
    const videos = state.allVideos.filter(
      (video) => video.category.toLowerCase() === category.toLowerCase()
    );
    dispatch({ type: actions.FilterVideo, payload: videos });
    navigate(`/category/${category}`);
  };

  return (
    <div className=" col-span-6 m-2  cursor-pointer rounded-lg w-full md:w-1/2 lg:w-1/3 ">
      <div
        className="flex flex-col h-full dark:bg-slate-700  rounded-lg w-72 mx-auto shadow-md"
        onClick={clickHandler}>
        <img
          className="object-contain h-40 p-2 rounded-lg"
          src={thumbnail}
          alt={category}
        />
        <div className="flex flex-col flex-1 p-2 dark:bg-slate-700 rounded-b-lg text-center">
          <p className="text-md font-medium">{category}</p>
          <p className="text-base font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
