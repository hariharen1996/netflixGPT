import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants";
import { addUpcomingMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  const getUpcomingMovies = async () => {
    const response = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    !upComingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
