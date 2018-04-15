/**
 * Created by shaol on 2017/7/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    keyWord: []
  },
  actions: {},
  mutations: {
    addKeyWrod(state, keyword) {
      state.keyWord.push(keyword)
    },
    removeKeyWrod(state, index) {
      state.keyWord.splice(index, 1)
    }
  },
  getters: {}
})
export default store
