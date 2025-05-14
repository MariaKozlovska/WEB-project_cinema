import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import { movies } from '../data/movies';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Catalog of films</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for movies by title..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
}
