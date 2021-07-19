import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0
  },
  getters: {
    time2(state) {
      return state.counter * 2;
    }
  },
  mutations: {
    setCounter(state, value) {
      state.counter = value;
    }
  }
});