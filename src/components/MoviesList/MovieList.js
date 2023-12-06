import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="p-2">
      <div className="flex mx-2 p-2 overflow-x-scroll scroll-smooth cursor-pointer">
        <div className="flex gap-2">
          {movies?.map((movie) => (
            <MovieCard
              key={movie?.id}
              posterPath={movie?.poster_path}
              movieId={movie?.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
