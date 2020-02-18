import api from "@/modules/api";

const types = {
  SET_SHIPS: "SET_SHIPS",
  CHOISE_SHIP: "CHOISE_SHIP"
};

const state = () => ({
  ships: [],
  ship: {},
  shipsLoaded: false,
  defaultPagination: {},
  pagination: {}
});

const getters = {
  ships(state) {
    return state.ships;
  },
  ship(state) {
    return state.ship;
  },
  shipsLoaded(state) {
    return state.shipsLoaded;
  }
};

const actions = {
  async fetchShips({ commit }, filters) {
    const ships = await api.getShips(filters);
    commit(types.SET_SHIPS, ships);
  },
  async shipsById({ commit }, shipId) {
    const ship = await api.getShip(shipId);
    commit(types.CHOISE_SHIP, ship);
  }
};

const mutations = {
  [types.SET_SHIPS](state, ships) {
    state.ships = [...ships];
    state.shipsLoaded = true;
  },
  [types.CHOISE_SHIP](state, ship) {
    state.ship = ship;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
