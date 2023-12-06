import React, { useRef } from "react";
import lang from "../../utils/languageconstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addMovieSearchResult } from "../../redux/searchSlice";

const SearchMovies = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();
  const dispatch = useDispatch();

  const getSearchMovies = async (e) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  };

  const handleSearchClick = async () => {
    const response = await getSearchMovies();
    dispatch(addMovieSearchResult(response));
    searchText.current.value = "";
  };
  return (
    <div className="pt-48 w-full">
      <form onSubmit={(e) => e.preventDefault()} className="text-center mx-5">
        <input
          ref={searchText}
          className="w-full rounded-md my-2 p-2 md:px-2 md:py-4 w-64 md:w-96 bg-gray-700 text-xs md:text-md text-white"
          type="search"
          placeholder={lang[langKey].getSearchPlaceholder}
          onChange={getSearchMovies}
        />
        <button
          onClick={handleSearchClick}
          className="bg-[#e50914] px-4 py-2 md:px-6 md:py-4 text-xs md:text-md text-white font-bold rounded-md hover:bg-opacity-80"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
