export default {
  namespaced: true,
  state: {
    list: [],
    data: {}
  },
  getters: {
    statuses: state => scope => {
      const statusNames = Object.keys(scope)

      return statusNames.reduce((statuses, statusName) => {
        statuses[statusName] = state.data[scope[statusName]] || {
          error: false,
          isSuccessful: false,
          isLoading: false
        }
        return statuses
      }, {})
    }
  },
  mutations: {
    ACTION_STATUS_UPDATE_NEW: (state, action) => {
      if (state.list.indexOf(action.type) === -1) {
        state.list = [...state.list, action.type]
      }

      state.data = {
        ...state.data,
        [action.type]: {
          isLoading: true,
          isSuccessful: false,
          isFailed: false
        }
      }
    },
    ACTION_STATUS_UPDATE_COMPLETE: (state, action) => {
      state.data = {
        ...state.data,
        [action.type]: {
          isLoading: false,
          isSuccessful: true,
          isFailed: false
        }
      }
    },
    ACTION_STATUS_UPDATE_ERROR: (state, action) => {
      state.data = {
        ...state.data,
        [action.type]: {
          isLoading: false,
          isSuccessful: false,
          isFailed: true,
          error: action.error
        }
      }
    }
  },
  actions: {
    UPDATE_NEW: ({ commit }, action) => {
      commit('ACTION_STATUS_UPDATE_NEW', action)
    },
    UPDATE_COMPLETE: ({ commit }, action) => {
      commit('ACTION_STATUS_UPDATE_COMPLETE', action)
    },
    UPDATE_ERROR: ({ commit }, action) => {
      commit('ACTION_STATUS_UPDATE_ERROR', action)
    }
  }
}
