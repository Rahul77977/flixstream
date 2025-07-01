import React, { useContext, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router";
import { GenresContext } from "@/context/genres.context";
import apiClient from "@/services/api-client"; // axios instance with base URL + API key

type GenreType = {
  id: number;
  name: string;
};

const Genres = () => {
  const { genres, setGenres } = useContext(GenresContext);
  const [genresName, setGenresName] = useState<string>();
  const [genreList, setGenreList] = useState<GenreType[]>([]);
  const navigate = useNavigate();

  // ✅ Fetch genres from TMDB API
  const fetchGenres = async () => {
    try {
      const res = await apiClient.get("/genre/movie/list", {
        params: { language: "en-US" },
      });
      setGenreList(res.data.genres); // API gives { genres: [ {id, name}, ... ] }
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const onChange = (data: string) => {
    const genreId = parseInt(data);
    setGenres(genreId);
    const selected = genreList.find((g) => g.id === genreId);
    setGenresName(selected?.name);
    navigate("/movies");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <h1 className="cursor-pointer">{genresName ?? "Genres"}</h1>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={genres?.toString()}
          onValueChange={onChange}
        >
          {genreList.map((genre) => (
            <DropdownMenuRadioItem key={genre.id} value={genre.id.toString()}>
              {genre.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Genres;
