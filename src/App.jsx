const App = () => {
    const [movieData, setMovieData] = React.useState(movies);
  
    return (
      <div className="app-container">
        <h1>Каталог фільмів</h1>
        <MovieList movies={movieData} />
      </div>
    );
  };