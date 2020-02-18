import Vue from "vue";
import Vuex from "vuex";

import films from "./films";
import actors from "./actors";
import ships from "./ships";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    films,
    actors,
    ships
  }
});
