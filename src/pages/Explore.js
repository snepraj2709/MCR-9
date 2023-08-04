import { Header, Sidebar, Feed, Footer } from "../components/index";
import { useData } from "../context/DataContext";
import { actions } from "../utils/constants";
import { useState } from "react";

export default function Explore() {
  const { state, dispatch } = useData();
  const [currentCategory, setCurrentCategory] = useState("All");

  const clickHandler = (category) => {
    setCurrentCategory(category);
    if (category === "All" || "") {
      dispatch({ type: actions.FilterVideo, payload: state?.allVideos });
    } else {
      const videos = state.allVideos.filter(
        (video) => video.category.toLowerCase() === category.toLowerCase()
      );
      dispatch({ type: actions.FilterVideo, payload: videos });
    }
  };
  const categories = [...state?.category];
  categories.unshift({ _id: 0, category: "All" });

  const classes =
    "bg-slate-100 shadow-md p-2 rounded-full h-8 object-cover text-sm font-medium mx-1 my-auto cursor-pointer";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="flex flex-col col-span-6">
          <div className="hidden md:inline-block flex-row py-2">
            {categories?.map(({ category }) => (
              <button
                key={category._id}
                className={`${classes} ${
                  category.toLowerCase() === currentCategory.toLowerCase()
                    ? "text-blue-500 dark:bg-slate-800 dark:text-white"
                    : "text-gray-900"
                }`}
                onClick={() => clickHandler(category)}>
                {category}
              </button>
            ))}
            <h2 className="font-bold text-2xl ml-4 pt-4">{currentCategory}</h2>
          </div>
          <Feed list={state?.filteredVideos} page="Explore" />
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
