import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MovieCard = ({ id, title, description, genre, posterUrl, showTimes }) => {
  const formatDateTime = (showTimes) => {
    if (!showTimes || showTimes.length === 0) return "No sessions";

    const firstShow = showTimes[0];
    const date = new Date(firstShow.date);

    const formattedDate = date.toLocaleDateString('en', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    return `${formattedDate}, ${firstShow.time}`;
  };

  const handleClick = () => {
    toast.info(`Navigating to booking for ${title}`);
  };

  return (
    <div className="movie-card">
      <div className="content">
        <img
          src={`/${posterUrl}`}
          alt={title}
          onError={(e) => {
            console.error(`Image load error: ${posterUrl}`);
            e.target.src = "/img/default-poster.jpg";
          }}
        />
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Session:</strong> {formatDateTime(showTimes)}</p>
      </div>
      <div className="bron-center">
        <Link to={`/booking/${id}`} onClick={handleClick}>
          <button className="bron">Reserve</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;