// src/components/MovieList.jsx
import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list-container">
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div className="movie-grid-item" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <div className="no-movies">
            <p>No movies found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;