import PropTypes from 'prop-types';

function SearchBar({ value, onChange }) {
  return (
    <label className="search-bar">
      <span>Buscar jugador</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Nombre, posicion o nacionalidad"
      />
    </label>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
