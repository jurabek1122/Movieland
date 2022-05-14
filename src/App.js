import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import Serials from './pages/Serials';
import Home from './pages/Home';
import Searched from './pages/Searched';
import Movie from './pages/Movie';
import Serial from './pages/Serial';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [serials, setSerials] = useState([]);

  const getMovie = async () => {
    const api = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4ee3cd13a54e32610733733ed2956367&language=en-US&page=1');
    const api2 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4ee3cd13a54e32610733733ed2956367&language=en-US&page=2');
    const data = await api.json()
    const data2 = await api2.json()
    for ( let i = 0; i<data2.results.length; i++) {
        data.results.push(data2.results[i])
    }
    const serialapi = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=4ee3cd13a54e32610733733ed2956367&language=en-US&page=1');
    const serialdata = await serialapi.json() 
    
    setSerials(serialdata.results)
    setMovies(data.results);
    setFiltered(data.results);

}


useEffect(() => {
    getMovie()
}, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar inputValue={inputValue} setInputValue={setInputValue} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/serial/:id' element={<Serial />} />
          <Route path='/searched/:search' element={<Searched serials={serials} setInputValue={setInputValue} movies={movies} inputValue={inputValue} />} />
          <Route path='/serials' element={<Serials serials={serials} />} />
          <Route path='/movies' element={<Movies movies={movies} setFiltered={setFiltered} filtered={filtered} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
