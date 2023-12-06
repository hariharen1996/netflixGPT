import React from "react";
import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";
import Loader from "../loader/Loader";

const TrailerContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return <Loader />;
  const mainMovie = movies[0];
  const { overview, original_title, id, poster_path } = mainMovie;

  return (
    <div className="w-screen h-screen">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id} poster={poster_path} />
    </div>
  );
};

export default TrailerContainer;
