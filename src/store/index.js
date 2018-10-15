import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}
const getters = {
  getCount (state) {
    return state.count
  }
}
const mutations = {
  add (state, amount) {
    state.count = state.count + amount
  },
  decrement (state, amount) {
    state.count = state.count - amount
  }
}
const actions = {
  addCounter ({ commit }) {
    commit('add', 1)
  },
  decreCounter ({ commit }) {
    commit('decrement', 1)
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
