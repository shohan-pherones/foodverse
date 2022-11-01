import { NavLink } from "react-router-dom";

const Navbar = ({
  searchQuery,
  setSearchQuery,
  searchHandler,
  inputField,
  saveCount,
}) => {
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "#f43f5e" : null,
    };
  };

  return (
    <nav className="flex justify-between items-center container mx-auto py-8">
      <h2 className="text-2xl font-bold lowercase italic">
        Food<span className="text-rose-500">verse</span>
      </h2>
      <form onSubmit={searchHandler}>
        <input
          ref={inputField}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          required
          placeholder="Search any recipe"
          className="bg-white/75 p-3 text-center rounded-full outline-none shadow-lg shadow-rose-100 focus:shadow-rose-200 duration-300"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            end
            to="/"
            className="text-gray-400 hover:text-gray-600 duration-300"
            style={navActive}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="favourites"
            className="text-gray-400 hover:text-gray-600 duration-300"
            style={navActive}
          >
            Favourites{" "}
            <span className="font-bold text-sky-500">({saveCount})</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
