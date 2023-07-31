import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import { actions } from "../utils/constants";

function Category({ cat }) {
  const { thumbnail, category } = cat;
  const { dispatch } = useData();
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch({ type: actions.FilterVideo, payload: category });
    navigate(`/category/${category}`);
  };
  return (
    <div
      className="shadow-md cursor-pointer group p-2 m-2 rounded-lg"
      onClick={clickHandler}>
      <img
        src={thumbnail}
        alt={category}
        className="object-contain rounded-lg h-45 w-full group-hover:scale-110 transition-transform duration-150 ease-in-out"
      />
      <p className="text-base font-semibold pt-3">{category}</p>
    </div>
  );
}

export default Category;
