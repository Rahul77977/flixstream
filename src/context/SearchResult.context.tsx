import { createContext, useState, type ReactNode } from "react";

interface SearchContextType {
  searchText: string;
  setSearchText: (value: string) => void;
  searchData: any;
  setSearchData: (data: any) => void;
}

export const SearchResultContext = createContext<SearchContextType>({
  searchText: "",
  setSearchText: () => {},
  searchData: null,
  setSearchData: () => {},
});

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState(null);

  return (
    <SearchResultContext.Provider
      value={{ searchText, setSearchText, searchData, setSearchData }}
    >
      {children}
    </SearchResultContext.Provider>
  );
};
