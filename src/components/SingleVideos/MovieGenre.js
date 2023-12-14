import React from "react";
import { useSelector } from "react-redux";
import { MOVIE_POSTER_CDN } from "../../utils/constants";
import NoVideos from "./GenreItems";

const MovieGenre = () => {
  const movieGenre = useSelector((store) => store.movievideos?.videoGenre);

  return (
    <div className="w-screen h-full">
      <img
        className="h-screen w-screen bg-cover "
        src={MOVIE_POSTER_CDN + movieGenre?.poster_path}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieGenre;
