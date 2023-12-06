import { useDispatch, useSelector } from "react-redux";
import { addAllVideos } from "../redux/videoSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useVideos = (id) => {
  const dispatch = useDispatch();
  const fetchVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await response.json();
    dispatch(addAllVideos(json.results[0]));
  };

  useEffect(() => {
    fetchVideos();
  }, []);
};

export default useVideos;
