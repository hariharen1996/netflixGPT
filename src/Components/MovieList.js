import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-2">
      <h1 className="text-xl text-white mx-2 p-2">{title}</h1>
      <div className="flex mx-2 p-2 overflow-x-scroll scroll-smooth cursor-pointer">
        <div className="flex gap-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
