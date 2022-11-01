import Recipe from "./Recipe";

const Favourites = ({ savedItems }) => {
  return (
    <>
      <p className="col-span-full text-4xl text-center font-semibold text-rose-300 leading-normal py-8">
        {savedItems.length === 0
          ? "Favourite list is empty!"
          : "Your favourite recipes!"}
      </p>
      <div className="container mx-auto py-8 min-h-screen flex flex-wrap gap-10 justify-center items-start">
        {savedItems.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default Favourites;
