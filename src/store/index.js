import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentJoke: "This is a joke",
    allJoke: []
  },
  mutations: {
    setcurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJoke.push(payload);
    }
  },
  actions: {},
  modules: {},
  getters: {
    getCurrentJoke(state) {
      return state.getCurrentJoke;
    }
  }
});
