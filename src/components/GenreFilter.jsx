const GenreFilter = ({ genres, selectedGenre, onGenreChange }) => {
    return (
      <div className="genre-filter">
        <h3>Filter by genre</h3>
        <div className="genre-buttons">
          <button 
            className={selectedGenre === '' ? 'active' : ''} 
            onClick={() => onGenreChange('')}
          >
            All genres
          </button>
          {genres.map((genre) => (
            <button
              key={genre}
              className={selectedGenre === genre ? 'active' : ''}
              onClick={() => onGenreChange(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    );
  };