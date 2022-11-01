import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const Recipe = ({ recipe }) => {
  return (
    <div
      key={recipe.id}
      className="w-80 overflow-hidden rounded-2xl bg-white/75 backdrop-blur-lg shadow-xl shadow-rose-100 border border-white p-5"
    >
      <div className="overflow-hidden rounded-xl h-40 flex justify-center items-center">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="rounded-xl w-full block"
        />
      </div>
      <div className="pt-5 flex flex-col">
        <p className="text-xs uppercase text-rose-500 font-bold tracking-wider">
          {recipe.publisher}
        </p>
        <h2 className="text-2xl capitalize truncate font-medium">
          {recipe.title}
        </h2>
        <Link
          to={`recipe-item/${recipe.id}`}
          className="flex items-center gap-2 text-sm capitalize bg-rose-500 text-rose-100 self-start p-2 px-5 rounded-md shadow-lg shadow-rose-200 mt-2 hover:bg-sky-500 hover:text-sky-100 hover:shadow-sky-200 duration-300"
        >
          View recipe <BsArrowRightShort className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
