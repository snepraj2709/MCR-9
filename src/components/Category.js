import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import { actions } from "../utils/constants";

function Category({ cat }) {
  const { thumbnail, category } = cat;
  const { dispatch } = useData();
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch({ type: actions.FilterVideo, payload: category });
    navigate("/explore");
  };
  return (
    <div className="shadow-md cursor-pointer" onClick={clickHandler}>
      <img src={thumbnail} alt={category} />
      <p className="text-base font-semibold">{category}</p>
    </div>
  );
}

export default Category;
