import React from "react";
import { useParams } from "react-router-dom";
import { MOVIE_POSTER_CDN } from "../../utils/constants.js";
import { useSelector } from "react-redux";
import useMovieGenre from "../../Hooks/useVideoGenre.js";
import useVideos from "../../Hooks/useVideos.js";
import Loader from "../loader/Loader.js";

const MovieVideos = () => {
  const allVideos = useSelector((store) => store.movievideos?.videos);
  const movieGenre = useSelector((store) => store.movievideos?.videoGenre);

  const { id } = useParams();

  useMovieGenre(id);
  useVideos(id);

  if (!allVideos) return <Loader />;

  return (
    <div className="w-screen h-screen">
      <iframe
        className="h-screen w-full"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${allVideos?.key}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieVideos;
