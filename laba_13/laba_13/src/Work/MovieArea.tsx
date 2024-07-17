import { Movie } from "../MovieLib/MovieLibrary";
import './../css/MovieArea.css'

interface areaProps {
    movie: Movie[],
    type: string
}
const MovieArea = ({ movie, type }: areaProps) => {
    const groupedMovies: Movie[][] = [];
    for (let i = 0; i < movie.length; i += 4) {
        groupedMovies.push(movie.slice(i, i + 4));
    }

    return (
        <div>
            <h1 className="typeName">
                {type}s
            </h1>
            <table>
                <tbody>
                    {groupedMovies.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((movie) => (
                                <td>
                                    <div className="area">
                                        <img src={movie.srcImg} className="myImage" alt={movie.name} />
                                        <p className="elemName">
                                            Name: {movie.name}
                                        </p>
                                        <p className="elemYear">
                                            Year: {movie.year} <span className="type">{type}</span>
                                        </p>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MovieArea;