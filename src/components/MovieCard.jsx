const MovieCard = ({ movie }) => {
    
    const formatShowTimes = (showTimes) => {
      return showTimes.map((showTime, index) => {
        
        const date = new Date(showTime.date);
        const formattedDate = date.toLocaleDateString('uk-UA', {
          day: 'numeric',
          month: 'long'
        });
        
        return (
          <div key={index} className="show-time">
            <span className="date">{formattedDate}</span>
            <span className="time">{showTime.time}</span>
          </div>
        );
      });
    };
  
    return (
      <div className="movie-card">
        <div className="movie-poster">
          <img src={movie.posterUrl} alt={`Movie poster "${movie.title}"`} />
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{movie.title}</h3>
          <div className="movie-genre">{movie.genre}</div>
          <p className="movie-description">{movie.description}</p>
          <div className="movie-showtimes">
            <h4>Sessions:</h4>
            <div className="showtimes-container">
              {formatShowTimes(movie.showTimes)}
            </div>
          </div>
        </div>
      </div>
    );
  };