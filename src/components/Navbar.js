import { NavLink } from "react-router-dom";

const Navbar = ({ searchQuery, setSearchQuery, searchHandler, inputField }) => {
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "#f97316" : null,
    };
  };

  return (
    <nav className="flex justify-between items-center container mx-auto py-8 border-b-2">
      <h2 className="text-3xl font-extrabold lowercase italic">
        Food<span className="text-orange-500">verse</span>
      </h2>
      <form onSubmit={searchHandler}>
        <input
          ref={inputField}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          required
          placeholder="Search your meal..."
          className="p-5 text-center rounded-full outline-none border-2 focus:border-orange-500 duration-500"
        />
      </form>
      <ul className="flex capitalize gap-5">
        <li>
          <NavLink
            end
            to="/"
            className="text-gray-400 hover:text-gray-600 duration-500"
            style={navActive}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="favourites"
            className="text-gray-400 hover:text-gray-600 duration-500"
            style={navActive}
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
