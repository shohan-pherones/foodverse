import { useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RecipeItem from "./components/RecipeItem";
import Favourites from "./components/Favourites";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [emptyArray, setEmptyArray] = useState("");
  const [stable, setStable] = useState(
    "Nothing to show, please search something!"
  );
  const [savedItems, setSavedItems] = useState(() => {
    const localData = localStorage.getItem("recipes");
    return localData ? JSON.parse(localData) : [];
  });
  const [saveCount, setSaveCount] = useState(() => {
    return savedItems.length;
  });

  const navigator = useNavigate();

  const inputField = useRef();

  const searchHandler = (e) => {
    e.preventDefault();

    inputField.current.blur();

    navigator("/");

    setIsLoading(true);
    setRecipes([]);
    setErrorMsg("");
    setEmptyArray("");
    setStable("");

    setTimeout(() => {
      fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}`
      )
        .then((res) => {
          if (!res.ok) throw new Error("Something went wrong!");
          return res.json();
        })
        .then((data) => {
          if (data.data.recipes.length === 0) setEmptyArray("No recipe found!");
          setRecipes(data.data.recipes);
          setIsLoading(false);
        })
        .catch((err) => setErrorMsg(err.message));
    }, 500);

    setSearchQuery("");
  };

  const saveHandler = (id) => {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setSavedItems((prevState) => [...prevState, data.data.recipe])
      );
  };

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(savedItems));
    setSaveCount(savedItems.length);
  }, [savedItems]);

  return (
    <div className="text-gray-600 text-xl font-normal bg-gray-100 min-h-screen w-full">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchHandler={searchHandler}
        inputField={inputField}
        saveCount={saveCount}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              recipes={recipes}
              isLoading={isLoading}
              errorMsg={errorMsg}
              searchQuery={searchQuery}
              emptyArray={emptyArray}
              stable={stable}
            />
          }
        />
        <Route
          path="recipe-item/:id"
          element={
            <RecipeItem saveHandler={saveHandler} savedItems={savedItems} />
          }
        />
        <Route
          path="favourites/recipe-item/:id"
          element={
            <RecipeItem saveHandler={saveHandler} savedItems={savedItems} />
          }
        />
        <Route
          path="favourites"
          element={<Favourites savedItems={savedItems} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
