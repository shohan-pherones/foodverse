import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto py-14 min-h-screen flex flex-col items-center gap-5">
      <h1 className="text-4xl font-semibold">Page not found!</h1>
      <Link
        to="/"
        className=" bg-orange-500 py-2 px-5 mt-3 text-orange-100 rounded shadow-lg shadow-orange-200 hover:bg-cyan-500 hover:text-cyan-100 hover:shadow-cyan-200 duration-500"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
