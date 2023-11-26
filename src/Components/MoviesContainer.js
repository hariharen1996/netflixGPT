import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesContainer = () => {
  const movies = useSelector((store) => store?.movies);
  // console.log(movies);
  return (
    <div className="bg-black min-w-screen">
      <div className="mr-5">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedmovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
      </div>
    </div>
  );
};

export default MoviesContainer;
