import Vue from 'vue'
import Vuex from 'vuex'

import actionStatus from '../modules/action-status/store'

Vue.use(Vuex)

function timer(duration) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, duration)
  })
}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    simpleSynchronousAction: () => {
      return 5
    },
    simpleAsynchronousAction: async () => {
      await timer(5000)
    },
    errorAsynchronousAction: async () => {
      await timer(5000)
      throw 'Doesnt work'
    }
  },
  modules: {
    actionStatus
  }
})
