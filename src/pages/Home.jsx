import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
      <div>
        <p className="eyebrow">Proyecto universitario</p>
        <h1>Jugadores FC Barcelona</h1>
        <p>
          Un proyecto en React para explorar jugadores del Barca, ver detalles, filtrar el listado
          y guardar favoritos usando Context API.
        </p>
        <Link to="/items" className="button">
          Ver jugadores
        </Link>
      </div>
    </section>
  );
}

export default Home;
