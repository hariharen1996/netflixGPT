import React from "react";
import { useSelector } from "react-redux";

const MovieGenre = () => {
  const movieGenre = useSelector((store) => store.movievideos?.videoGenre);

  return (
    <div className="pt-40 sm:pt-48 px-12 text-white bg-gradient-to-r from-black w-screen h-screen">
      <h1 className="text-start text-xl xl:text-4xl px-26 font-bold">
        {movieGenre?.title}
      </h1>
      <p className="text-start py-2 lg:py-6 lg:px-26 lg:w-6/12 text-sm md:text-md">
        ReleaseDate: {movieGenre?.release_date}
      </p>
      <div className="my-4 flex flex-wrap gap-2 justify-start sm:justify-start items-start">
        {movieGenre?.genres?.map((item) => (
          <button
            key={item.id}
            className="rounded-md px-3 py-2 md:px-10 text-xs md:text-sm  bg-white bg-opacity-90 hover:bg-opacity-80 text-black cursor-pointer font-medium"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieGenre;
