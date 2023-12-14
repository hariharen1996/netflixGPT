import MovieGenre from "./MovieGenre";
import GenreItems from "./GenreItems";

const GenreContainer = () => {
  return (
    <div className="fixed w-screen h-screen">
      <GenreItems />
      <MovieGenre />
    </div>
  );
};

export default GenreContainer;
