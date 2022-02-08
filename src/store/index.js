import Vue from 'vue'
import Vuex from 'vuex'
import dogList from "./modules/dogList";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    dogList,
  }
})
