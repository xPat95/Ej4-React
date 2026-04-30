import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton.jsx';

function PlayerCard({ item, showFavoriteButton = true }) {
  const isImageUrl = typeof item.image === 'string' && item.image.startsWith('http');

  return (
    <article className="player-card">
      <div className="player-visual">
        {isImageUrl ? <img src={item.image} alt={item.name} /> : <span>{item.image}</span>}
      </div>

      <div className="player-card-body">
        <p className="player-position">
          {item.position} · #{item.number}
        </p>
        <h2>{item.name}</h2>
        <p>{item.shortDescription}</p>
        <p className="muted">{item.nationality}</p>

        <div className="card-actions">
          <Link to={`/items/${item.id}`} className="button secondary">
            Ver detalle
          </Link>
          {showFavoriteButton && <FavoriteButton item={item} />}
        </div>
      </div>
    </article>
  );
}

PlayerCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    nationality: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
  showFavoriteButton: PropTypes.bool,
};

export default PlayerCard;
