import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton.jsx';
import { getBarcelonaItemById } from '../services/barcelonaService.js';

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const isImageUrl = typeof item?.image === 'string' && item.image.startsWith('http');

  useEffect(() => {
    async function loadItem() {
      const data = await getBarcelonaItemById(id);
      setItem(data || null);
      setLoading(false);
    }

    loadItem();
  }, [id]);

  if (loading) {
    return <p className="status-message">Cargando detalle...</p>;
  }

  if (!item) {
    return (
      <section className="detail-panel">
        <p className="eyebrow">Sin resultado</p>
        <h1>Jugador no encontrado</h1>
        <p>No existe un item con el id "{id}".</p>
        <Link to="/items" className="button secondary">
          Volver al listado
        </Link>
      </section>
    );
  }

  return (
    <section className="detail-panel">
      <div className="detail-header">
        <div className="detail-visual">
          {isImageUrl ? <img src={item.image} alt={item.name} /> : <span>{item.image}</span>}
        </div>
        <div>
          <p className="eyebrow">{item.position}</p>
          <h1>{item.name}</h1>
          <p className="muted">
            Numero {item.number} · Nacionalidad {item.nationality}
          </p>
        </div>
      </div>

      <p>{item.longDescription}</p>

      <div className="highlight-box">
        <strong>Dato destacado:</strong> {item.highlight}
      </div>

      <div className="detail-actions">
        <FavoriteButton item={item} />
        <Link to="/items" className="button secondary">
          Volver al listado
        </Link>
      </div>
    </section>
  );
}

export default ItemDetail;
