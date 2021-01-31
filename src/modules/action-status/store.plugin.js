import store from '@/store'

export default {
  before: action => {
    if (action.type.indexOf('actionStatus') === -1) {
      store.dispatch('actionStatus/UPDATE_NEW', action)
    }
  },
  after: action => {
    if (action.type.indexOf('actionStatus') === -1) {
      store.dispatch('actionStatus/UPDATE_COMPLETE', action)
    }
  },
  error: (action, state, error) => {
    if (action.type.indexOf('actionStatus') === -1) {
      action.error = error
      store.dispatch('actionStatus/UPDATE_ERROR', action)
    }
  }
}
