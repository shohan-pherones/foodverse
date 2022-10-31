import Recipe from "./Recipe";
import { CgSpinner } from "react-icons/cg";

const Home = ({ recipes, isLoading, errorMsg, emptyArray, stable }) => {
  return (
    <div className="container mx-auto py-14 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center min-h-screen items-start">
      {!isLoading && !errorMsg && !emptyArray && recipes.length === 0 ? (
        <p className="col-span-full text-4xl font-medium text-gray-400 text-center">
          {stable}
        </p>
      ) : null}

      {isLoading && (
        <p className="col-span-full text-3xl">
          {errorMsg ? errorMsg : <CgSpinner className="animate-spin" />}
        </p>
      )}

      {recipes.length === 0 && (
        <p className="col-span-full text-3xl">{emptyArray}</p>
      )}

      {recipes.length > 0 &&
        recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)}
    </div>
  );
};

export default Home;
