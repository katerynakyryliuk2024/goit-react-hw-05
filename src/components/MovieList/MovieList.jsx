import css from "./MovieList.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.listEl}>
          <NavLink to={`/${movie.id}`} className={getLinkStyles}>
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
