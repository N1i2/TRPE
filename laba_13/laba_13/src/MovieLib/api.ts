//const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = process.env.REACT_APP_API_KEY;

export const moviesAPI = {
    getMovies(title: string, type: string){
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&type=${type}`)
        .then(response => response.json())
        .then(data => data.Search)
    },
}

export type MovieType = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}