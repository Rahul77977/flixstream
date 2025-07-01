import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";

export interface MovieResult {
  adult: boolean;
  id: number;
  original_language: string;
  original_title: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  name?: string;
}

const useMovieList = (genres?: number | null) => {
  const [movies, setMovies] = useState<MovieResult[]>([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  const fetchMovieList = async () => {
    try {
      setLoading(true);
      const res = await apiClient.get("/discover/movie", {
        params: {
          with_genres: genres ? String(genres) : undefined,
          language: "en-US", 
          page: 1             
        },
      });
      setMovies(res.data.results || []);
    } catch (err: any) {
      console.error("Failed to fetch movies:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, [genres]);

  return { movies, loading, error };
};

export default useMovieList;
