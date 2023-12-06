import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMoviesGenre } from "../redux/videoSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieGenre = (id) => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTIONS
    );
    const json = await response.json();
    dispatch(addMoviesGenre(json));
  };

  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useMovieGenre;
