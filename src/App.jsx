const App = () => {
  const [movieData, setMovieData] = React.useState(movies);
  const [searchTerm, setSearchTerm] = React.useState('');
  
  React.useEffect(() => {
    if (searchTerm.trim() === '') {
      setMovieData(movies);
    } else {
      const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setMovieData(filteredMovies);
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>Catalog of films</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for movies by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      
      <MovieList movies={movieData} />
    </div>
  );
};