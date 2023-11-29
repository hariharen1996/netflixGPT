import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES_API } from "../utils/constants";
import { addPopularMovies } from "../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const response = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
    const json = await response.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
