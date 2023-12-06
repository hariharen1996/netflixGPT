import React from "react";
import { useParams } from "react-router-dom";
import { MOVIE_POSTER_CDN } from "../../utils/constants.js";
import { useSelector } from "react-redux";
import useMovieGenre from "../../Hooks/useVideoGenre.js";
import useVideos from "../../Hooks/useVideos.js";

const MovieVideos = () => {
  const allVideos = useSelector((store) => store.movievideos?.videos);
  const movieGenre = useSelector((store) => store.movievideos?.videoGenre);

  const { id } = useParams();

  useMovieGenre(id);
  useVideos(id);

  return (
    <div className="absolute w-screen h-screen">
      <img
        className="h-full w-screen bg-cover block sm:hidden"
        src={MOVIE_POSTER_CDN + movieGenre?.poster_path}
        alt="poster"
      />
      <iframe
        className="w-screen object-cover aspect-video hidden sm:block"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${allVideos?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieVideos;
