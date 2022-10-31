import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsPerson, BsClock } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { CgSpinner } from "react-icons/cg";

const RecipeItem = ({ saveHandler, hasBeenSaved }) => {
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { id } = useParams();

  const navigator = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setErrorMsg("");
    setRecipe("");

    setTimeout(() => {
      fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Something went wrong!");
          return res.json();
        })
        .then((data) => {
          setRecipe(data.data.recipe);
          setIsLoading(false);
        })
        .catch((err) => setErrorMsg(err.message));
    }, 500);
  }, []);

  const timeFormatter = (time) => {
    if (!time) return;

    if (!String(time).includes(".")) {
      return time + "h";
    }

    if (String(time).includes(".")) {
      return String(time).replace(".", "h") + "min";
    }
  };

  return (
    <>
      {isLoading && (
        <p className="col-span-full text-3xl container mx-auto py-14 text-center min-h-screen">
          {errorMsg ? (
            errorMsg
          ) : (
            <CgSpinner className="animate-spin text-center inline-block" />
          )}
        </p>
      )}

      {recipe && (
        <div className="min-h-screen container mx-auto py-14 flex gap-10 flex-col lg:flex-row">
          <div className="w-150 h-130 flex justify-center items-center overflow-hidden rounded-xl">
            <img
              src={recipe.image_url}
              alt={recipe.title}
              className="w-full block"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p className="uppercase tracking-wider font-bold text-cyan-400">
                {recipe.publisher}
              </p>
              <button
                className={`uppercase tracking-wider font-bold ${
                  hasBeenSaved ? "text-rose-400" : "text-purple-400"
                }`}
                onClick={() => saveHandler(recipe.id)}
              >
                {hasBeenSaved
                  ? "- Remove from favourites"
                  : "+ Save as favourite"}
              </button>
            </div>
            <h2 className="text-4xl font-semibold">{recipe.title}</h2>
            <div className="flex flex-wrap gap-3 justify-between uppercase font-bold tracking-wider">
              <p className="flex items-center gap-2">
                <BsPerson className="inline-block text-cyan-500" /> Servings{" "}
                <span className="capitalize">(People):</span>{" "}
                <span className="text-orange-500">{recipe.servings}</span>
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <BsClock className="inline-block text-cyan-500" />
                Cooking Time:{" "}
                <span className="text-orange-500 lowercase font-bold">
                  {recipe.cooking_time < 60
                    ? String(recipe.cooking_time) + "min"
                    : timeFormatter(recipe.cooking_time / 60)}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="border-t-2 mt-3 pt-5 text-2xl font-bold flex items-center gap-2">
                <span>
                  <GiKnifeFork className="text-cyan-500" />
                </span>{" "}
                Ingredients:
              </h2>
              <div className="leading-relaxed">
                {recipe.ingredients &&
                  recipe.ingredients.map((ing) => (
                    <p key={Math.floor(Math.random() * 100000000)}>
                      {" "}
                      <TiTick className="inline-block" />
                      <span className="text-orange-500">
                        {ing.quantity && ing.quantity}
                        {ing.unit && ing.unit}
                      </span>{" "}
                      {ing.description && ing.description}
                    </p>
                  ))}
              </div>
            </div>
            <div className="flex gap-10">
              <button
                onClick={() => navigator(-1)}
                className="self-start bg-orange-500 py-2 px-5 mt-3 text-orange-100 rounded shadow-lg shadow-orange-200 hover:bg-cyan-500 hover:text-cyan-100 hover:shadow-cyan-200 duration-500"
              >
                Go Back
              </button>
              <a
                href={recipe.source_url}
                target="_blank"
                className="self-start bg-orange-500 py-2 px-5 mt-3 text-orange-100 rounded shadow-lg shadow-orange-200 hover:bg-cyan-500 hover:text-cyan-100 hover:shadow-cyan-200 duration-500"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeItem;
