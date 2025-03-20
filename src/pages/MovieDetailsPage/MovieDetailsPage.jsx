import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../components/moviesService";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getDetail() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMoviesById(movieId);

        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getDetail();
  }, [movieId]);
  return (
    <>
      {isLoading && <div>Loading movie...</div>}
      {error && <div>There was an error, please reload this page...</div>}
      {movie && (
        <div className={css.container}>
          <div className={css.mainInfo}>
            <div className={css.movieFotoInfo}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.original_title}
                className={css.movieFoto}
              />
            </div>
            <div className={css.movieInfo}>
              <h2 className={css.title}>{movie.title}</h2>
              <p className={css.userScore}>{`User Score ${
                Math.round(movie.vote_average * 10) + "% "
              }`}</p>
              <h3 className={css.secondaryTitle}>Overwiev</h3>
              <p className={css.overview}>{movie.overview}</p>
              <h3>Genres</h3>
              <ul className={css.genresList}>
                {movie.genres.map((el) => (
                  <li key={el.id}>{el.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={css.addInfo}>
            <h3>Additional Information</h3>
            <ul className={css.list}>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
