import Recipe from "./Recipe";

const Favourites = ({ savedItems }) => {
  return (
    <>
      <p className="col-span-full text-4xl font-medium text-gray-400 text-center pt-14">
        {savedItems.length === 0
          ? "Favourite list is empty!"
          : "Your favourite recipes!"}
      </p>
      <div className="container mx-auto py-14 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center min-h-screen items-start">
        {savedItems.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default Favourites;
