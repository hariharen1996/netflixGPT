import React from "react";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import TrailerContainer from "./TrailerContainer";
import MoviesContainer from "./MoviesContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <TrailerContainer />
      <MoviesContainer />
    </div>
  );
};

export default Browse;
