import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.listEl}>
          <h2 className={css.movieName}>{movie.title}</h2>
        </li>
      ))}
    </ul>
  );
}
