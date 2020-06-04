import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import programsRoutes from './programs'
//import services_routes from './services'

Vue.use(VueRouter)

const mainRoutes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue'),
  },
  {
    path: '/contact-us',
    name: 'ContactPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactPage.vue'),
  },

  {
    path: '/events',
    name: 'EventsPage',
    component: () => import(/* webpackChunkName: "events" */ '../views/EventsPage.vue'),
  },

  {
    path: '/our-centers',
    name: 'CentersPage',
    component: () => import(/* webpackChunkName: "our-centers" */ '../views/CentersPage.vue'),
  },

  {
    path: '/how-to-help',
    name: 'HowToHelpPage',
    component: () => import(/* webpackChunkName: "how-to-help" */ '../views/HowToHelpPage.vue'),
  },

  {
    path: '/our-staff',
    name: 'StaffPage',
    component: () => import(/* webpackChunkName: "our-staff" */ '../views/StaffPage.vue'),
  },

  {
    path: '/testimonials',
    name: 'TestimonialsPage',
    component: () => import(/* webpackChunkName: "our-staff" */ '../views/TestimonialsPage.vue'),
  },

];

const newRoutes = mainRoutes.concat( programsRoutes );
let newSet = new Set( newRoutes );
const routes = Array.from(newSet);

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
