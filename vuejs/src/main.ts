import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* Mixins */
import titleMixin from './mixins/titleMixin';
Vue.mixin( titleMixin );

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')