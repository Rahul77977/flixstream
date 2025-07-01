import Player from "@/components/Player";
import TvPlayer from "@/components/TvPlayer"; 
import Trending from "@/components/Trending/Trending";
import MovieList from "@/components/ui/MovieList";
import SearchList from "@/components/ui/SearchList";
import TvShowList from "@/components/ui/TvShowList";

import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Trending />} />
      <Route path="/movies" element={<MovieList />} />
      <Route path="/tvshows" element={<TvShowList />} />
      <Route path="/search/:searchName" element={<SearchList />} />
      <Route path="/player/:playerId" element={<Player />} /> 
      <Route path="/tvplayer/:playerId" element={<TvPlayer />} /> 
    </Routes>
  );
};

export default AllRoutes;
