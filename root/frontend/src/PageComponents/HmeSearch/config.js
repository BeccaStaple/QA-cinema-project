export const api = '181476d04fb2a8ece3b4d9419432270a'


const baseURl = `https://api.themoviedb.org/3`

export const mountURL = `${baseURl}/trending/movie/day?api_key=${api}`
export const changeURL = `${baseURl}/search/movie?query=`
export const fallBackURL = `${baseURl}/trending/tv/week?api_key=${api}`
export const genreURL = `${baseURl}/genre/movie/list?language=en-US&api_key=${api}`