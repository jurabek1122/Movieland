const MovieCard = ({movie}) => {
    return (
        <div className='card'>
            <h4>{movie.title}</h4>
            <h5>{movie.release_date}</h5>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
        </div>
    );
}

export default MovieCard ;