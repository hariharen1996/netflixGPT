import React from "react";
import { DEFAULT_IMAGE, MOVIE_POSTER_CDN } from "../../utils/constants";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieCard = ({ posterPath, movieId }) => {
  const movieposter = posterPath
    ? MOVIE_POSTER_CDN + posterPath
    : DEFAULT_IMAGE;
  if (!movieId) return null;

  return (
    <div className="w-36 md:w-48 text-white transition duration-300 hover:-translate-y-5">
      <Link to={"/videos/" + movieId}>
        {" "}
        <LazyLoadImage
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          effect="opacity"
          src={movieposter}
          alt="movie"
        />
      </Link>
    </div>
  );
};

export default MovieCard;
