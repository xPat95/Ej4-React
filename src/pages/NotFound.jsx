import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>Error 404 - Ruta no encontrada</h1>
      <p>La pagina que intentaste abrir no existe dentro de este proyecto.</p>
      <div className="detail-actions">
        <Link to="/" className="button">
          Ir al Home
        </Link>
        <Link to="/items" className="button secondary">
          Ver listado
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
