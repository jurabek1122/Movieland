import { useState, useEffect} from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const Home = () => {

    const [trailer, setTrailer] = useState([]);

    const getMovie = async () => {
        const api = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4ee3cd13a54e32610733733ed2956367&language=en-US&page=1');
        const data = await api.json()
        
        const trailers = data.results.filter((trailer) =>
        trailer.genre_ids.includes(53)
        )

        setTrailer(trailers)
    }

    useEffect(() => {
        getMovie()
    }, []);

    return (
        <div className='home'>
            <h1>Latest Premieres</h1>
            <Splide options={{
                    perPage: 3,
                    perMove: 1,
                    type: 'loop',
                    speed: 400,
                    arrows: true,
                    paginations: false,
                    drag: "free",
                    width: "100%",
                    height: "30rem"
                    }} >
                {trailer.map((movie) => {
                   return (
                    <SplideSlide key={movie.id}>
                        <Link key={movie.id} to={'/movie/' + movie.id}>
                            <div className='slide-card'>
                                <img className='trailer-img' src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
                                <h4 className='slide-title'>{movie.title}</h4>
                            </div>
                        </Link>
                    </SplideSlide>
                   ) 
                })}
            </Splide>
            
            
        </div>
    );
}

export default Home;