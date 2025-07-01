import  { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Genres from "./ui/Genres";
import { Input } from "./input";
import logo from "../assets/movie.png"

import { SearchResultContext } from "@/context/SearchResult.context";

const Navbar = () => {
  const navigate = useNavigate();
  const { searchText, setSearchText } = useContext(SearchResultContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.length === 0) {
      navigate("/movies");
    } else {
      navigate(`/search/${value}`);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchText.trim().length > 0) {
      navigate(`/search/${searchText}`);
    }
  };

  return (
    <div className="flex justify-between md:px-10 sm:px-5 px-5 items-center gap-3 text-xl my-3">
      <img
        src={logo}
        alt="logo"
        className="md:h-14 sm:h-9 h-9 hover:opacity-80 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="flex gap-3 items-center">
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Search"
            className="border-gray-500 rounded-2xl md:w-fit sm:w-[30vw]"
            value={searchText}
            onChange={handleChange}
          />
        </form>
        <div className="md:block sm:hidden hidden">
          <div className="flex gap-6 items-center">
            <Genres />
            <Link to="/movies">
              <div>Movies</div>
            </Link>
            <Link to="/tvshows">
              <div>TV Shows</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
