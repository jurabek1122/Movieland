import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import Genres from '../components/Genres';
import { Link } from 'react-router-dom';

const Movies = ({movies, setFiltered, filtered}) => {

    const [active, setActive] = useState(0);

    return (
        <div>
            <Genres movies={movies} active={active} setActive={setActive} setFiltered={setFiltered} />
            <div className='cards'>
                    {filtered.map((movie) => {
                        return <Link key={movie.id} to={'/movie/' + movie.id}><MovieCard key={movie.id} movie={movie} /></Link>;
                    })}
            </div>
        </div>
    )
}

export default Movies;