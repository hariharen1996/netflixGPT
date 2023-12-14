import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const response = await data.json();

    const filteredData = response.results.filter(
      (video) => (video.type = "Trailer")
    );
    const trailer = filteredData.length ? filteredData[0] : response.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;