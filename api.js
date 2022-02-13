const API_KEY = "be0f3f0ec9232076fd93640e71f6c33b";
const PLAYING_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`;
const TRENDINGMOVIE_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
const TODAYONAIRTV_URL = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`;
const TOPRATEDTV_URL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const TRENDINGTV_URL = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`;

export const moviesApi = {
  getPlaying: () => fetch(TRENDINGMOVIE_URL).then((res) => res.json()),
  getTrending: () => fetch(PLAYING_URL).then((res) => res.json()),
};

export const TVApi = {
  getTodayOnAir: () => fetch(TODAYONAIRTV_URL).then((res) => res.json()),
  getTopRatedTvShow: () => fetch(TOPRATEDTV_URL).then((res) => res.json()),
  getTrendingTV: () => fetch(TRENDINGTV_URL).then((res) => res.json()),
};
