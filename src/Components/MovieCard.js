import React from "react";
import { MOVIE_POSTER_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  const movieposter = posterPath
    ? MOVIE_POSTER_CDN + posterPath
    : "https://wallpaperbat.com/img/365042-fondos-de-pantalla-animated-movies-animation.jpg";
  return (
    <div className="w-36 md:w-48 text-white">
      <img src={movieposter} alt="movie" />
    </div>
  );
};

export default MovieCard;
