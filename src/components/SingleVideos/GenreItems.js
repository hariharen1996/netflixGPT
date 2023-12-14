import { useSelector } from "react-redux";

const GenreItems = () => {
  const movieGenre = useSelector((store) => store.movievideos?.videoGenre);
  return (
    <div className="absolute text-white bg-gradient-to-r from-black w-full h-screen">
      <div className="flex flex-wrap pt-36  flex-col justify-start pl-5 items-start min-h-full">
        <h1 className="text-start text-white text-sm xl:text-4xl px-26 font-bold">
          No videos found for the movie: {movieGenre?.title}{" "}
          {movieGenre?.original_title}
        </h1>
        <p className="text-start pt-5 text-sm md:text-md pr-2 hidden sm:block">
          {movieGenre?.overview}
        </p>
        <p className="text-start pt-5 text-sm md:text-md hidden sm:block">
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
    </div>
  );
};

export default GenreItems;
