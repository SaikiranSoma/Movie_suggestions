import  {useEffect, useState } from 'react';
import React from 'react';
import MovieCard from './MovieCard';

import "./App.css";
import SearchIcon from './search.svg';

const API_URL='http://www.omdbapi.com?apikey=7b3a60bb';


const movie1={
  "Title": "Pushpa: The Rise - Part 1",
  "Year": "2021",
  "imdbID": "tt9389998",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMmQ4YmM3NjgtNTExNC00ZTZhLWEwZTctYjdhOWI4ZWFlMDk2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg"
}

const App = () => {

  const [movies, setmovies] =useState([]);
  const [searchterm,setSearchTerm]=useState('');

const searchmovies= async (title) => {
          const response = await fetch(`${API_URL}&s=${title}`);

          const data= await response.json();

          setmovies(data.Search);
        }

  useEffect(() => {
      searchmovies('pushpa');
           },[]);

  return (
    <div className='app'>
       <h1>MovieFlix</h1>
            <div className='search'>
              <input
                placeholder='search for movies'
                value={searchterm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img 
                src={SearchIcon}
                alt='search'
                onClick={ () => searchmovies(searchterm) }
              />
            </div>

            {
              movies?.length > 0
              ?(
                <div className='container'>
                    {movies.map((movie) =>(
                      <MovieCard movie={movie}/>
                    ))}
               </div>
              ):(
                <div className='empty'>
                  <h2>No movies found</h2>
                </div>
              )
            }  
    </div>

  )
}


export default App