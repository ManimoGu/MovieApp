import React from 'react'
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = ({list}) => {
    return (
        <div className="Movies">
        
        {
            list.map(movie => (

               <MovieCard   film={movie}/>

            ))
        }

            
        </div>
    )
}

export default MovieList
