import { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(item) {
    setFavorites((current) => {
      if (current.some((favorite) => favorite.id === item.id)) {
        return current;
      }

      return [...current, item];
    });
  }

  function removeFavorite(id) {
    setFavorites((current) => current.filter((favorite) => favorite.id !== id));
  }

  function isFavorite(id) {
    return favorites.some((favorite) => favorite.id === id);
  }

  function toggleFavorite(item) {
    if (isFavorite(item.id)) {
      removeFavorite(item.id);
      return;
    }

    addFavorite(item);
  }

  const value = useMemo(
    () => ({
      favorites,
      addFavorite,
      removeFavorite,
      isFavorite,
      toggleFavorite,
    }),
    [favorites],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useFavorites() {
  return useContext(FavoritesContext);
}
