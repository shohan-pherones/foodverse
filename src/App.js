import { useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import RecipeItem from "./components/RecipeItem";
import Footer from "./components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [emptyArray, setEmptyArray] = useState("");

  const inputField = useRef();

  const navigator = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();

    navigator("/");

    setIsLoading(true);
    setRecipes([]);
    setErrorMsg("");
    setEmptyArray("");

    inputField.current.blur();

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
    }, 1000);

    setSearchQuery("");
  };

  return (
    <div className="text-gray-600 text-xl font-normal bg-gray-100 min-h-screen w-full">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchHandler={searchHandler}
        inputField={inputField}
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
            />
          }
        />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recipe-item/:id" element={<RecipeItem />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
