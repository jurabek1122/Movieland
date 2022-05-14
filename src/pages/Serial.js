import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { IoIosArrowBack } from 'react-icons/io';

const Movie = () => {

    const [info, setInfo] = useState({})
    const [serial, setSerial] = useState({})
    const [serialTrailer, setSerialTrailer] = useState(true)

    const params = useParams()

    const getInfo = async () => {
        const movie = await fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=4ee3cd13a54e32610733733ed2956367`)
        const movieInfo = await movie.json();
        setInfo(movieInfo)

        const video = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/videos?api_key=4ee3cd13a54e32610733733ed2956367&language=en-US`)
        const serialVideo = await video.json();
        
        setSerial(serialVideo.results[0])
    }


    useEffect(() => {
        getInfo()
    }, [params.id])
    console.log(serial)

    if (serialTrailer) {
        return(
            <div className='movie'>
            <div className='movie-info'>
                <div>
                    <div className='d-f'>
                        <h1>{info.name}</h1>
                    </div>
                    <img src={"https://image.tmdb.org/t/p/w500" + info.backdrop_path} />
                </div>
                <div className='infos'>
                    <h1 onClick={() => setSerialTrailer(false)} className='trailerBtn'>Trailer</h1>
                    <h4>Release Date: {info.last_air_date}</h4>
                    Genres: {info.genres?.map((genre) => {
                        return (
                            <h4 key={genre.id} className='company-item'>{genre.name};</h4>
                        )
                    })}
                    <h4>About Serial: {info.overview}</h4>
                </div>
            </div>
            {/* <h1>Trailer</h1> */}
            {/* <ReactPlayer url={'https://www.youtube.com/watch?v=' + video?.key} className='trailer' /> */}
        </div>
        );
    } else {
        return (
            <div className='trailer-info'>
                <div className='back'>
                    <h1>Trailer</h1>
                    <IoIosArrowBack onClick={() => setSerialTrailer(true)} className='backBtn' />
                </div>
                <ReactPlayer url={'https://www.youtube.com/watch?v=' + serial?.key} />
            </div>
        );
    }
}

export default Movie;