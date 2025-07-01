import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

const useTVShowList = () => {
  const [tvshows, setTvshows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTvShowList = async () => {
    try {
      const res = await apiClient.get("/discover/tv");
      setTvshows(res.data.results);
    } catch (err) {
      console.error("Failed to fetch TV shows", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTvShowList();
  }, []);

  return { tvshows, loading, error };
};

export default useTVShowList;
