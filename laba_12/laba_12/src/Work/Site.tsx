import MovieArea from "./MovieArea";
import { TypeMovieLibrary } from "../MovieLib/MovieLibrary";
import './../css/Site.css'
import { Route, Routes } from "react-router-dom";
import Structure from "./Structure";
import NotFound from "./NotFound";
import Start from './Start'

interface TypeProps {
    movies: TypeMovieLibrary
};

const Site = ({ movies }: TypeProps) => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Structure/>}>
                    <Route index element={<Start />}/>
                    <Route path='films' element={<MovieArea movie={movies.films} type='Film' />} />
                    <Route path='cartoons' element={<MovieArea movie={movies.cartoons} type='Cartoon' />} />
                    <Route path='series' element={<MovieArea movie={movies.series} type='Serie' />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}


export default Site;