import React from "react";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import TrailerContainer from "./TrailerContainer";
import MoviesContainer from "./MoviesContainer";
import { useSelector } from "react-redux";
import SearchContainer from "./SearchContainer";

const Browse = () => {
  const search = useSelector((store) => store.search.showSearch);
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {search ? (
        <SearchContainer />
      ) : (
        <>
          <TrailerContainer />
          <div className="w-screen">
            <MoviesContainer />
          </div>
        </>
      )}
    </div>
  );
};

export default Browse;
