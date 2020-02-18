import api from "@/modules/api";

const types = {
  SET_FILMS: "SET_FILMS",
  CHOISE_FILM: "CHOISE_FILM"
};

const state = () => ({
  films: [],
  film: {},
  filmsLoaded: false,
  defaultPagination: {},
  pagination: {}
});

const getters = {
  films(state) {
    return state.films;
  },
  film(state) {
    return state.film;
  },
  filmsLoaded(state) {
    return state.filmsLoaded;
  }
};

const actions = {
  async fetchFilms({ commit }, filters) {
    const films = await api.getFilms(filters);
    commit(types.SET_FILMS, films);
  },
  async filmsById({ commit }, filmId) {
    const film = await api.getFilm(filmId);
    commit(types.CHOISE_FILM, film);
  }
};

const mutations = {
  [types.SET_FILMS](state, films) {
    state.films = [...films];
    state.filmsLoaded = true;
  },
  [types.CHOISE_FILM](state, film) {
    state.film = film;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
