import { Link } from "react-router-dom";

const MovieCard = ({ id, title, description, genre, posterUrl, showTimes }) => {
  // Форматування першого сеансу для відображення (можна змінити на потреби)
  const formatDateTime = (showTimes) => {
    if (!showTimes || showTimes.length === 0) return "Немає сеансів";
    
    const firstShow = showTimes[0];
    const date = new Date(firstShow.date);
    
    // Форматування дати у стилі "01 травня 2025"
    const formattedDate = date.toLocaleDateString('eng', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    
    return `${formattedDate}, ${firstShow.time}`;
  };

  return (
    <div className="movie-card">
      <div className="content">
        <img 
          src={`/${posterUrl}`} 
          alt={title} 
          onError={(e) => {
            console.error(`Image upload error: ${posterUrl}`);
            e.target.src = "/img/default-poster.jpg";
          }}
        />
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Session:</strong> {formatDateTime(showTimes)}</p>
      </div>
      <div className="bron-center">
        <Link to={`/booking/${id}`}>
          <button className="bron">Rezerve</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;