import { getLocal, setLocal } from '@/utils/storage'
var params = getLocal('user')
var getInfo = getLocal('info')
const user = {
  state: {
    userMsg: params ? JSON.parse(params) : null,
    info: getInfo ? JSON.parse(getInfo) : null
  },

  mutations: {
    'SET_PARAMS': (state, params) => {
      state.userMsg = params
    },
    'SET_INFO': (state, params) => {
      state.info = params
    }
  },

  actions: {
    setUser({ commit }, params) {
      setLocal('user', params)
      commit('SET_PARAMS', params)
    },
    setInfo({ commit }, params) {
      setLocal('info', params)
      commit('SET_INFO', params)
    }
  }
}

export default user
