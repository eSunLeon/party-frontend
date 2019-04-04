const app = {
  state: {
    backgroundColor: '#fff',
    bottomSelect: 0
  },
  mutations: {
    SET_BG: (state, bg) => {
      state.backgroundColor = bg
    },
    SET_SELECT: (state, index) => {
      state.bottomSelect = index
    }
  },
  actions: {
    setBg({ commit }, bg) {
      commit('SET_BG', bg)
    },
    setSelect({ commit }, index) {
      commit('SET_SELECT', index)
    }
  }
}
export default app
