import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constants";
import { addTopRatedMovies } from "../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedmovies = useSelector((store) => store.movies.topRatedmovies);
  const getTopRated = async () => {
    const response = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    !topRatedmovies && getTopRated();
  }, []);
};

export default useTopRatedMovies;
