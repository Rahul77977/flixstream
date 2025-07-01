import useMovieList from "@/hooks/UseMovies";
import MovieCard from "./MovieCard";
import { useContext } from "react";
import { GenresContext } from "@/context/genres.context";

const MovieList = () => {
  const { genres } = useContext(GenresContext);

  // ✅ Destructure the actual movie list
  const { movies, loading, error } = useMovieList(genres);

  if (loading) return <p className="p-5">Loading...</p>;
  if (error) return <p className="p-5 text-red-500">Error fetching movies.</p>;

  return (
    <div className="p-3 mb-3">
      <h1 className="text-4xl font-semibold p-5">Movies</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-y-3">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movieResult={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
