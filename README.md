# Jugadores FC Barcelona

Proyecto universitario hecho con Vite, React y React Router. El tema elegido es el mejor equipo de futbol del mundo, el FC Barcelona, y el nivel apuntado es **Senior / 100 puntos**.

## Como correr el ejercicio:

Requisitos:

- Tener Docker Desktop instalado y abierto.

Comando:

```bash
docker compose up --build
```

Abrir en el navegador:

```txt
http://localhost:5173
```

Para detener el contenedor:

```bash
Ctrl + C
```

o, en otra terminal:

```bash
docker compose down
```

## Rutas implementadas

- `/`: Home del proyecto.
- `/items`: listado de jugadores/articulos.
- `/items/:id`: detalle de cada jugador usando `useParams`.
- `*`: pagina 404 para rutas no encontradas.

## Funcionalidades

- Listado de jugadores del FC Barcelona.
- Detalle individual con informacion ampliada.
- Busqueda por nombre, posicion o nacionalidad.
- Boton de jugador aleatorio usando `useNavigate`.
- Pagina 404 con enlaces para volver.
- Favoritos con Context API.
- PropTypes en `PlayerCard`, `SearchBar`, `FavoriteButton` y el provider de favoritos.
- Consumo de API con fallback local para que la app siga funcionando sin API key.

## Datos y servicio

Los datos locales viven en `src/data/barcelonaItems.js`. El servicio vive en `src/services/barcelonaService.js`.

El servicio intenta consultar una API publica de deportes con `fetch`. Si ocurre un error de red, CORS, formato inesperado, limite de uso o cualquier otro problema, carga automaticamente los datos locales del archivo `barcelonaItems.js`.

## Componente reutilizable: PlayerCard

`PlayerCard` se usa para mostrar cada jugador dentro del listado.

- `item`: objeto con la informacion del jugador, como `id`, `name`, `position`, `number`, `nationality`, `image` y `shortDescription`.
- `showFavoriteButton`: booleano opcional para mostrar u ocultar el boton de favoritos. Por defecto es `true`.

## Video demostrativo

La carpeta `/demo` esta preparada para colocar el video de demostracion.

Para el video se recomienda mostrar:

- Home.
- Listado de jugadores.
- Busqueda o filtro.
- Detalle de un jugador.
- Boton de jugador aleatorio.
- Agregar y quitar favoritos.
- Pagina 404.

## Notas

- La navegacion interna usa `Link`, `NavLink` y `useNavigate`, no etiquetas `a`.
- El proyecto no depende de llaves privadas ni API keys.
- `node_modules` esta ignorado en `.gitignore`.
