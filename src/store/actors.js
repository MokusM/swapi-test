import api from "@/modules/api";

const types = {
  SET_ACTORS: "SET_ACTORS",
  CHOISE_ACTOR: "CHOISE_ACTOR"
};

const state = () => ({
  actors: [],
  actor: {},
  actorsLoaded: false,
  defaultPagination: {},
  pagination: {}
});

const getters = {
  actors(state) {
    return state.actors;
  },
  actor(state) {
    return state.actor;
  },
  actorsLoaded(state) {
    return state.actorsLoaded;
  }
};

const actions = {
  async fetchActors({ commit }, filters) {
    const actors = await api.getActors(filters);
    commit(types.SET_ACTORS, actors);
  },
  async actorsById({ commit }, actorId) {
    const actor = await api.getActor(actorId);
    commit(types.CHOISE_FILM, actor);
  }
};

const mutations = {
  [types.SET_ACTORS](state, actors) {
    state.actors = [...actors];
    state.actorsLoaded = true;
  },
  [types.CHOISE_ACTOR](state, actor) {
    state.actor = actor;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
