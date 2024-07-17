import { useState } from "react";
import SearchBar from "../Search/SearchBar";
import SearchMovieItem from "../Search/SearchMovieItem";
import { MovieType, moviesAPI } from "../MovieLib/api";

const Start = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [moviesType, setMoviesType] = useState<'movie' | 'series' | ''>('');

  const handleSearchTextChange = (searchText: string): void => {
    setSearchText(searchText);
  }

  const handleTypeOfMoviesChange = (typeOfMovies: 'movie' | 'series' | ''): void => {
    setMoviesType(typeOfMovies);
  }

  const fetchMovies = async (_searchText: string, _typeOfMovies: 'movie' | 'series' | '') => {
    const resultsMovie = await moviesAPI.getMovies(searchText, moviesType)
    setMovies(resultsMovie);
  }

  const search = () => {
    fetchMovies(searchText, moviesType)
  }

  return (
    <div className="home">
      <h1>Start</h1>
      <SearchBar  onSearchTextChange={handleSearchTextChange} onTypeOfMoviesChange={handleTypeOfMoviesChange} onSearch={search} />
      <SearchMovieItem movie={movies} />
    </div>
  );
}

//searchText={searchText} typeOfMovies={moviesType}
export default Start;
