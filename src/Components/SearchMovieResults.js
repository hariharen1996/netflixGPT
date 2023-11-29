import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const SearchMovieResults = () => {
  const movieResults = useSelector((store) => store.search?.searchResults);
  if (!movieResults) return null;
  console.log(movieResults);
  return (
    <div className="flex flex-wrap justify-center items-center pt-10 pb-10 gap-2 bg-black bg-opacity-70">
      {movieResults.length === 0 && (
        <h1 className="text-white text-md md:text-3xl">
          Search to display your favourite movies here..
        </h1>
      )}

      {movieResults.map((movie) => (
        <MovieCard
          key={movie.id}
          posterPath={movie?.poster_path}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default SearchMovieResults;
