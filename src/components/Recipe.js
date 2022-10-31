import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  return (
    <div
      key={recipe.id}
      className="w-80 bg-white overflow-hidden rounded-xl shadow-lg shadow-gray-200"
    >
      <div className="h-48 overflow-hidden flex justify-center items-center">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="w-full block"
        />
      </div>
      <div className="p-5 flex flex-col gap-1">
        <p className="text-xs uppercase tracking-widest font-bold text-cyan-400">
          {recipe.publisher}
        </p>
        <h2 className="truncate font-semibold text-2xl capitalize">
          {recipe.title}
        </h2>
        <Link
          to={`/recipe-item/${recipe.id}`}
          className="self-start bg-orange-500 py-2 px-5 mt-3 text-orange-100 rounded shadow-lg shadow-orange-200 hover:bg-cyan-500 hover:text-cyan-100 hover:shadow-cyan-200 duration-500"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
