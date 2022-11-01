import Recipe from "./Recipe";
import { CgSpinner } from "react-icons/cg";
import FryingPan from "./FryingPan";

const Home = ({ recipes, isLoading, errorMsg, emptyArray, stable }) => {
  return (
    <div className="container mx-auto py-8 flex flex-wrap gap-10 justify-center items-start">
      {!isLoading && !errorMsg && !emptyArray && recipes.length === 0 ? (
        <div className="col-span-full text-4xl text-center font-semibold text-rose-300 leading-normal">
          <p>{stable}</p>
          <FryingPan />
        </div>
      ) : null}

      {isLoading && (
        <p className="col-span-full text-2xl">
          {errorMsg ? errorMsg : <CgSpinner className="animate-spin" />}
        </p>
      )}

      {recipes.length === 0 && (
        <p className="col-span-full text-2xl">{emptyArray}</p>
      )}

      {recipes.length > 0 &&
        recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)}
    </div>
  );
};

export default Home;
