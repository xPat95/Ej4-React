import PropTypes from 'prop-types';
import { useFavorites } from '../context/FavoritesContext.jsx';

function FavoriteButton({ item }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const selected = isFavorite(item.id);

  return (
    <button
      type="button"
      className={selected ? 'favorite-button selected' : 'favorite-button'}
      onClick={() => toggleFavorite(item)}
    >
      {selected ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    </button>
  );
}

FavoriteButton.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteButton;
