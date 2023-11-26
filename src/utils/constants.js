export const LOGIN_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_BANNER =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const MOVIE_LANDING_IMAGE =
  "https://cdn.sanity.io/images/4ij0poqn/production/f23a0dd0591642ad2e73197885c3f6f6b57b5700-1417x1063.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB,
  },
};

export const NOW_PLAYING_MOVIE_API =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const MOVIE_TRAILER_API = "https://api.themoviedb.org/3/movie/";

export const MOVIE_POSTER_CDN = "https://image.tmdb.org/t/p/w500/";

export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TOP_RATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
