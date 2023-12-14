import React from "react";
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies";
import Header from "../Header/Header";
import TrailerContainer from "../HomeTrailer/TrailerContainer";
import MoviesContainer from "../MoviesList/MoviesContainer";
import { useSelector } from "react-redux";
import SearchContainer from "../Searchmovies/SearchContainer";
import Footer from "../Footer/Footer";

const Browse = () => {
  const search = useSelector((store) => store.search.showSearch);
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {search ? (
        <SearchContainer />
      ) : (
        <div className="w-full">
          <TrailerContainer />
          <div className="w-screen">
            <MoviesContainer />
          </div>
        </div>
      )}
      <div>{!search && <Footer />}</div>
    </div>
  );
};

export default Browse;
