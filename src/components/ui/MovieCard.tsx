import type { MovieResult } from "@/hooks/UseMovies";
import { Card, CardContent } from "../card";
import { useNavigate } from "react-router-dom";

interface Props {
  movieResult: MovieResult;
}

const MovieCard = ({ movieResult }: Props) => {
  const navigate = useNavigate();

  // ❌ Skip rendering if no poster_path
  if (!movieResult.poster_path) return null;

  return (
    <Card
      className="border-0 cursor-pointer"
      onClick={() => navigate(`/player/${movieResult.id}`)}
    >
      <CardContent>
        <div>
          <img
            loading="lazy"
            className="hover:opacity-80 transition-all rounded-md object-cover w-full h-[300px]"
            src={`https://image.tmdb.org/t/p/w500${movieResult.poster_path}`}
            alt={movieResult.title || movieResult.name}
          />
          <h1 className="mt-3 text-base font-medium text-center">
            {movieResult.title ? movieResult.title : movieResult.name}
          </h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
