const endpoints = {
  baseURL: process.env.API_URL || "https://swapi.co/api/",

  films() {
    return `films/`;
  },

  film(filmId) {
    const pathParams = filmId ? `/${filmId}` : "";
    return `films${pathParams}/`;
  },

  actors() {
    return `people/`;
  },

  actor(actorId) {
    const pathParams = actorId ? `/${actorId}` : "";
    return `people${pathParams}/`;
  },

  ships() {
    return `starships/`;
  },

  ship(shipId) {
    const pathParams = shipId ? `/${shipId}` : "";
    return `starships${pathParams}/`;
  }

  /*moderate(eventId) {
    const pathParams = eventId ? `/${eventId}` : "";
    return `/photos/${pathParams}/moderate`;
  }*/
};

export default endpoints;
