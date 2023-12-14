import React from "react";
import { DEFAULT_IMAGE, MOVIE_POSTER_CDN } from "../../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, movieId }) => {
  const movieposter = posterPath
    ? MOVIE_POSTER_CDN + posterPath
    : DEFAULT_IMAGE;
  if (!movieId) return null;

  return (
    <div className="w-36 md:w-48 text-white transition duration-300 hover:-translate-y-5">
      <Link to={"/videos/" + movieId}>
        {" "}
        <img src={movieposter} alt="movie" />
      </Link>
    </div>
  );
};

export default MovieCard;
