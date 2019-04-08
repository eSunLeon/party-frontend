import { getLocal, setLocal } from '@/utils/storage'
var params = getLocal('user')
const user = {
  state: {
    userMsg: params ? JSON.parse(params) : null
  },

  mutations: {
    'SET_PARAMS': (state, params) => {
      state.userMsg = params
    }
  },

  actions: {
    setUser({ commit }, params) {
      setLocal('user', params)
      commit('SET_PARAMS', params)
    }
  }
}

export default user
