const app = {
  state: {
    backgroundColor: '#fff'
  },
  mutations: {
    SET_BG: (state, bg) => {
      state.backgroundColor = bg
    }
  },
  actions: {
    setBg({ commit }, bg) {
      commit('SET_BG', bg)
    }
  }
}
export default app
