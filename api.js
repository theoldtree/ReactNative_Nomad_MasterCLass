const API_KEY = 'be0f3f0ec9232076fd93640e71f6c33b'
const PLAYING_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`

export const getTrending = () => (
    fetch(TRENDING_URL).then((res)=>res.json())
)

export const getPlaying = () => (
    fetch(PLAYING_URL).then((res)=>res.json())
)

export const moviesApi = { getPlaying, getTrending }