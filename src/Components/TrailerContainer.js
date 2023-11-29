import React from "react";
import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";

const TrailerContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[11];
  const { overview, original_title, id, poster_path } = mainMovie;

  return (
    <div className="w-screen h-screen">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id} poster={poster_path} />
    </div>
  );
};

export default TrailerContainer;
