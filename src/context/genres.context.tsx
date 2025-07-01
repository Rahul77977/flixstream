import { createContext, useState, type ReactNode } from "react";

type GenresContextType = {
  genres: number | null;
  setGenres: (data: number) => void;
};

export const GenresContext = createContext<GenresContextType>({
  genres: null,
  setGenres: () => {},
});

export const GenresProvider = ({ children }: { children: ReactNode }) => {
  const [genres, setGenres] = useState<number | null>(null);

  return (
    <GenresContext.Provider value={{ genres, setGenres }}>
      {children}
    </GenresContext.Provider>
  );
};
