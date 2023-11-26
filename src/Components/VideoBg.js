import React, { useEffect } from "react";
import { MOVIE_LANDING_IMAGE } from "../utils/constants";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRated";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";

const VideoBg = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  console.log(trailerVideo);

  return (
    <div className="w-screen h-full">
      <img
        className="h-full w-screen bg-cover block sm:hidden"
        src={MOVIE_LANDING_IMAGE}
      />

      <iframe
        className="w-screen h-screen object-cover aspect-video hidden sm:block"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoBg;
