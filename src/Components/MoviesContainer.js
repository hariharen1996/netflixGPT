import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="z-50 relative mr-10">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedmovies}
          />
          <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
        </div>
      </div>
    )
  );
};

export default MoviesContainer;
