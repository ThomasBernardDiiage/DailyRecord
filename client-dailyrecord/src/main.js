import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRecord from '@codekraft-studio/vue-record'

Vue.config.productionTip = false
Vue.use(VueRecord)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
