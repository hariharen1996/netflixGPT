import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { NOW_PLAYING_MOVIE_API } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const getNowPlayingMovies = async () => {
    const response = await fetch(NOW_PLAYING_MOVIE_API, API_OPTIONS);
    const json = await response.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
