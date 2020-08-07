import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import AOS from 'aos';
import 'aos/dist/aos.css';

import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript);

Vue.config.productionTip = false

/* Mixins */
import titleMixin from './mixins/titleMixin';
Vue.mixin( titleMixin );

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
