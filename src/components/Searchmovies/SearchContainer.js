import React from "react";
import SearchMovies from "./SearchMovies";
import { LOGIN_IMAGE } from "../../utils/constants";
import SearchMovieResults from "./SearchMovieResults";

const SearchContainer = () => {
  return (
    <div>
      <div className="fixed -z-[10] min-h-screen h-full">
        <img
          className="w-screen h-full object-cover"
          src={LOGIN_IMAGE}
          alt="Netflix banner"
        />
      </div>

      <SearchMovies />
      <div className="pt-6 w-full">
        <SearchMovieResults />
      </div>
    </div>
  );
};

export default SearchContainer;
