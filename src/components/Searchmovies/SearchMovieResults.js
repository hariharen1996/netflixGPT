import React from "react";
import { useSelector } from "react-redux";
import lang from "../../utils/languageconstants";
import MovieCard from "../MoviesList/MovieCard";

const SearchMovieResults = () => {
  const langKey = useSelector((store) => store.config.lang);
  const movieResults = useSelector((store) => store.search?.searchResult);

  if (!movieResults) return;

  return (
    <div className="p-5 flex flex-wrap justify-center items-center pt-10 pb-10 gap-2 bg-black bg-opacity-70">
      {movieResults.length === 0 && (
        <h1 className="text-white text-md md:text-3xl">
          {lang[langKey].searchResults}
        </h1>
      )}

      {movieResults.map((movie) => (
        <MovieCard
          key={movie.id}
          posterPath={movie?.poster_path}
          movie={movie}
          movieId={movie?.id}
        />
      ))}
    </div>
  );
};

export default SearchMovieResults;
