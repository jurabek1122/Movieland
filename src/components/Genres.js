import { useEffect } from 'react';

const Genres = ({ movies, active, setActive, setFiltered }) => {

    useEffect(() => {
        if(active === 0) {
            setFiltered(movies);
            return;
        } 
        const filtered = movies.filter((movie) =>
            movie.genre_ids.includes(active)
        )
        setFiltered(filtered);
    }, [active])

   
    return (
        <div className='genres'>
            <button
            className={active === 0 ? 'active' : ''} 
            onClick={() => setActive(0)}>All</button>
            <button 
            className={active === 35 ? 'active' : ''} 
            onClick={() => setActive(35)}>Comedy</button>
            <button 
            className={active === 14 ? 'active' : ''} 
            onClick={() => setActive(14)}>Fantasy</button>
            <button 
            className={active === 28 ? 'active' : ''} 
            onClick={() => setActive(28)}>Action</button>
            <button 
            className={active === 53 ? 'active' : ''} 
            onClick={() => setActive(53)}>Thriller</button>
            <button 
            className={active === 27 ? 'active' : ''} 
            onClick={() => setActive(27)}>Horror</button>
        </div>
    );
}

export default Genres;