import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import actionStatusPlugin from './modules/action-status/store.plugin'
import ActionStatus from './modules/action-status/components/ActionStatus'

store.subscribeAction(actionStatusPlugin)

Vue.component('action-status', ActionStatus)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
