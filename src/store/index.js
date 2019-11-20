import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userActual:null
  },
  mutations: {
    setUserActual(state, userActual){
      state.userActual = userActual
      console.log("user:",state.userActual);
    }
  },
  actions: {
  },
  modules: {
  }
})
