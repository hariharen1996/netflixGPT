import React from "react";
import MovieVideos from "./MovieVideos";
import MovieGenre from "./MovieGenre";
import SubHeader from "../Header/SubHeader";

const AllVideoContainer = () => {
  return (
    <div>
      <SubHeader />
      <div className="w-screen h-screen bg-gradient-to-r from-black">
        <MovieVideos />
        <MovieGenre />
      </div>
    </div>
  );
};

export default AllVideoContainer;
