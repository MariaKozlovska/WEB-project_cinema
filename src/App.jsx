const App = () => {
  const [movieData, setMovieData] = React.useState(movies);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedGenre, setSelectedGenre] = React.useState('');
  const [genres, setGenres] = React.useState([]);

  React.useEffect(() => {
    const uniqueGenres = [...new Set(movies.flatMap(movie => 
      movie.genre.split(', ')
    ))];
    setGenres(uniqueGenres);
  }, []);
  React.useEffect(() => {
    const filteredMovies = movies.filter(movie => {
      const matchesSearch = searchTerm.trim() === '' || 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim());
      const matchesGenre = selectedGenre === '' || 
        movie.genre.split(', ').includes(selectedGenre);
      
      return matchesSearch && matchesGenre;
    });
    
    setMovieData(filteredMovies);
  }, [searchTerm, selectedGenre]);

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