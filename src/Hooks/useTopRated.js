import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constants";
import { addTopRatedMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const response = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRatedMovies;
