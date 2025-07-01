import { useEffect, useContext } from "react";
import apiClient from "@/services/api-client";
import { SearchResultContext } from "@/context/SearchResult.context";

const useMultiSearch = (input: string) => {
  const { setSearchData } = useContext(SearchResultContext);

  useEffect(() => {
    if (!input) return;

    const fetchData = async () => {
      try {
        const res = await apiClient.get("/search/multi", {
          params: { query: input },
        });
        setSearchData(res.data.results);
      } catch (err) {
        console.error("Search error:", err);
        setSearchData(null);
      }
    };

    fetchData();
  }, [input]);
};

export default useMultiSearch;
