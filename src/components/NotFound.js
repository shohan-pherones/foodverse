import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import FryingPan from "./FryingPan";

const NotFound = () => {
  return (
    <div className="container mx-auto py-8 flex flex-col items-center gap-5">
      <p className="col-span-full text-4xl text-center font-semibold text-rose-300 leading-normal">
        Sorry, page not found!
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 text-sm capitalize bg-rose-500 text-rose-100 p-2 px-5 rounded-full shadow-lg shadow-rose-200 hover:bg-sky-500 hover:text-sky-100 hover:shadow-sky-200 duration-300"
      >
        Go home <BsArrowRightShort className="text-lg" />
      </Link>
      <FryingPan />
    </div>
  );
};

export default NotFound;
