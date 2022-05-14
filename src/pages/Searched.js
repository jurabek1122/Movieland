import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import SerialCard from '../components/SerialCard';
import { useParams, Link } from 'react-router-dom';


const Searched = ({ inputValue, setInputValue, movies, serials  }) => {

    const [searched, setSearched] = useState([]);
    const [searchedSerial, setSearchedSerial] = useState([]);
    let params = useParams();

    const getSearched = () => {
        if (inputValue.length > 0) {
            setSearched(movies.filter((movie) => 
            movie.title.toLowerCase().includes(inputValue.toLowerCase())
            ))
        } else {
            setSearched([])
        }
    }
    const getSearchedSerial = () => {
        if (inputValue.length > 0) {
            setSearchedSerial(serials.filter((serial) => 
            serial.name.toLowerCase().includes(inputValue.toLowerCase())
            ))
        } else {
            setSearchedSerial([])
        }
    }
    
    useEffect(() => {
        getSearched()
        getSearchedSerial()
        setInputValue('')

    }, [params.search])
    

    return (
        <div>
        <div className='cards'>
            {searched.map((movie) => {
                return <Link key={movie.id} to={'/movie/' + movie.id}><MovieCard key={movie.id} movie={movie} /></Link>;
            })}
        </div>
        <div className='cards'>
            {searchedSerial.map((serial) => {
            return <Link key={serial.id} to={'/serial/' + serial.id}><SerialCard key={serial.id} serial={serial} /></Link>;
            })}
        </div>
        </div>
         
    );
}

export default Searched;