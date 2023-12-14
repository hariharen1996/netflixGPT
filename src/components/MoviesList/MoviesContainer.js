import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import VideoShimmer from "../ShimmerUI/VideoShimmer";
import Loader from "../loader/Loader";
import Footer from "../Footer/Footer";

const MoviesContainer = () => {
  const movies = useSelector((store) => store?.movies);
  const search = useSelector((store) => store.search.showSearch);

  if (!movies) return <Loader />;

  return (
    <div className="bg-black">
      <div className="z-50 relative mr-10">
        <h1 className="text-xl text-white mx-4 p-2">Now Playing</h1>
        {movies.nowPlayingMovies ? (
          <MovieList movies={movies.nowPlayingMovies} showMovies={movies} />
        ) : (
          <VideoShimmer />
        )}
        <h1 className="text-xl text-white mx-4 p-2">Popular Movies</h1>
        {movies.popularMovies ? (
          <MovieList
            title={"Popular Movies"}
            movies={movies.popularMovies}
            showMovies={movies}
          />
        ) : (
          <VideoShimmer />
        )}
        <h1 className="text-xl text-white mx-4 p-2">Top Rated Movies</h1>
        {movies.topRatedmovies ? (
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedmovies}
            showMovies={movies}
          />
        ) : (
          <VideoShimmer />
        )}
        <h1 className="text-xl text-white mx-4 p-2">Up Coming Movies</h1>
        {movies.upComingMovies ? (
          <MovieList
            showMovies={movies}
            title={"Upcoming Movies"}
            movies={movies?.upComingMovies}
          />
        ) : (
          <VideoShimmer />
        )}
      </div>
      <div className="w-full text-center">{!search && <Footer />}</div>
    </div>
  );
};

export default MoviesContainer;
