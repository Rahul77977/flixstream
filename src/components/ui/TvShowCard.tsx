import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../card";

const TvShowCard = ({ tvshowResult }) => {
  const navigate = useNavigate();

  if (!tvshowResult.poster_path) return null;

  return (
    <Card
      className="border-0 cursor-pointer"
      onClick={() => navigate(`/tvplayer/${tvshowResult.id}`)}
    >
      <CardContent>
        <div>
          <img
            loading="lazy"
            className="hover:opacity-80 transition-all rounded-md object-cover w-full h-[300px]"
            src={`https://image.tmdb.org/t/p/w500${tvshowResult.poster_path}`}
            alt={tvshowResult.title || tvshowResult.name}
          />
          <h1 className="mt-3 text-base font-medium text-center">
            {tvshowResult.title ? tvshowResult.title : tvshowResult.name}
          </h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default TvShowCard;
