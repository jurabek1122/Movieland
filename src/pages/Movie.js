import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { IoIosArrowBack } from 'react-icons/io';

const Movie = () => {

    const [info, setInfo] = useState({})
    const [video, setVideo] = useState({})
    const [trailer, setTrailer] = useState(true)
    const params = useParams()

    const getInfo = async () => {
        const movie = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=4ee3cd13a54e32610733733ed2956367`)
        const movieInfo = await movie.json();
        setInfo(movieInfo)
        const video = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=4ee3cd13a54e32610733733ed2956367&language=en-US`)
        const movieVideo = await video.json();
        const trailer = movieVideo.results.filter((movie) =>
            movie.name.includes('Official Trailer')
        )
        setVideo(trailer[0])
    }

    useEffect(() => {
        getInfo()
    }, [params.id])
    console.log(video)
    
    if (trailer) {
        return (
            <div className='movie-info'>
                <div>
                    <div className='d-f'>
                        <h1>{info.title}</h1>
                    </div>
                    <img src={"https://image.tmdb.org/t/p/w500" + info.backdrop_path} />
                </div>
                <div className='infos'>
                    <h1 onClick={() => setTrailer(false)} className='trailerBtn'>Trailer</h1>
                    <h4>Release Date: {info.release_date}</h4>
                    <h4>Budget: {info.budget} $</h4>
                    Genres: {info.genres?.map((genre) => {
                        return (
                            <h4 key={genre.id} className='company-item'>{genre.name};</h4>
                        )
                    })}
                    Production Companies: {info.production_companies?.map((com) => {
                        return (
                            <h4 key={com.id} className='company-item'>{com.name};</h4>
                        )
                    })}
                </div>
            </div>
            
    );
    } else {
        return (
            <div className='trailer-info'>
                <div className='back'>
                    <h1>Trailer</h1>
                    <IoIosArrowBack onClick={() => setTrailer(true)} className='backBtn' />
                </div>
                <ReactPlayer url={'https://www.youtube.com/watch?v=' + video?.key} />
            </div>
        );
    }
    
}

export default Movie;