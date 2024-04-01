import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const NavBar = () => {
  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");

  return (
    <nav>
      <Link className={todosData === null ? "active" : ""} to="/home">
        All
      </Link>
      <Link
        className={todosData === "active" ? "active" : ""}
        to="/home?todos=active"
      >
        Active
      </Link>
      <Link
        className={todosData === "completed" ? "active" : ""}
        to="/home?todos=completed"
      >
        Completed
      </Link>
    </nav>
  );
};

export default NavBar;
