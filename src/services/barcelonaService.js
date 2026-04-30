import localItems from '../data/barcelonaItems.js';

const API_URL = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Barcelona';

function normalizeApiPlayer(player) {
  return {
    id: player.idPlayer || player.strPlayer?.toLowerCase().replaceAll(' ', '-'),
    name: player.strPlayer,
    position: player.strPosition || 'Jugador',
    number: player.strNumber || 'S/N',
    nationality: player.strNationality || 'Sin dato',
    image: player.strCutout || player.strThumb || player.strPlayer?.slice(0, 2).toUpperCase() || 'FCB',
    shortDescription: player.strDescriptionEN?.slice(0, 120) || 'Jugador relacionado con el FC Barcelona.',
    longDescription:
      player.strDescriptionEN || 'No hay una descripcion larga disponible desde la API para este jugador.',
    highlight: player.strTeam ? `Relacionado con ${player.strTeam}.` : 'Informacion obtenida desde API publica.',
  };
}

export async function getBarcelonaItems() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('La API respondio con error');
    }

    const data = await response.json();

    if (!Array.isArray(data.player) || data.player.length === 0) {
      throw new Error('La API no devolvio jugadores validos');
    }

    const apiItems = data.player
      .filter((player) => player.strPlayer)
      .slice(0, 10)
      .map(normalizeApiPlayer);

    return apiItems.length > 0 ? apiItems : localItems;
  } catch (error) {
    console.info('Usando datos locales del Barca:', error.message);
    return localItems;
  }
}

export async function getBarcelonaItemById(id) {
  const items = await getBarcelonaItems();
  return items.find((item) => String(item.id) === String(id));
}
