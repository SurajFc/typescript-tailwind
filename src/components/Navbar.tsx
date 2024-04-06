import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const NavBar = () => {
  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");

  return (
    <nav className="flex flex-wrap justify-around items-center mt-4 px-2 sm:px-4 w-full sm:w-60%">
      <Link
        className={`px-4 py-2 text-xl sm:text-base ${
          todosData === null ? "font-bold" : ""
        }`}
        to="/home"
      >
        All
      </Link>
      <Link
        className={`px-4 py-2 text-xl sm:text-base ${
          todosData === "active" ? "font-bold" : ""
        }`}
        to="/home?todos=active"
      >
        Active
      </Link>
      <Link
        className={`px-4 py-2 text-xl sm:text-base ${
          todosData === "completed" ? "font-bold" : ""
        }`}
        to="/home?todos=completed"
      >
        Completed
      </Link>
    </nav>
  );
};

export default NavBar;
