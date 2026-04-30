import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerCard from '../components/PlayerCard.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { getBarcelonaItems } from '../services/barcelonaService.js';

function Items() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadItems() {
      const data = await getBarcelonaItems();
      setItems(data);
      setLoading(false);
    }

    loadItems();
  }, []);

  const filteredItems = useMemo(() => {
    const text = search.trim().toLowerCase();

    if (!text) {
      return items;
    }

    return items.filter((item) => {
      const searchable = `${item.name} ${item.position} ${item.nationality}`.toLowerCase();
      return searchable.includes(text);
    });
  }, [items, search]);

  function goToRandomPlayer() {
    if (items.length === 0) {
      return;
    }

    const randomItem = items[Math.floor(Math.random() * items.length)];
    navigate(`/items/${randomItem.id}`);
  }

  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Listado</p>
          <h1>Jugadores del FC Barcelona</h1>
        </div>
        <button type="button" className="button" onClick={goToRandomPlayer}>
          Jugador aleatorio
        </button>
      </div>

      <SearchBar value={search} onChange={setSearch} />

      {loading ? (
        <p className="status-message">Cargando jugadores...</p>
      ) : (
        <div className="cards-grid">
          {filteredItems.map((item) => (
            <PlayerCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {!loading && filteredItems.length === 0 && (
        <p className="status-message">No se encontraron jugadores con ese filtro.</p>
      )}
    </section>
  );
}

export default Items;
