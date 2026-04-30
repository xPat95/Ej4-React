import { Link, NavLink } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext.jsx';

function Navbar() {
  const { favorites } = useFavorites();

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        Jugadores FC Barcelona
      </Link>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/items" className={({ isActive }) => (isActive ? 'active' : '')}>
          Jugadores
        </NavLink>
        <span className="favorite-count">Favoritos: {favorites.length}</span>
      </nav>
    </header>
  );
}

export default Navbar;
