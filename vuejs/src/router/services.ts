const services_routes = [

  // services
  {
    path: '/services/website-design-and-development',
    name: 'services-1',
    component: () => import(/* webpackChunkName: "services-website-design-and-development" */ '../views/services/WebDesignDevelopmentPage.vue')
  },
  {
    path: '/services/software-development',
    name: 'services-2',
    component: () => import(/* webpackChunkName: "services-software-development" */ '../views/services/SoftwareDevelopmentPage.vue')
  },
  {
    path: '/services/website-maintenance-and-support',
    name: 'services-3',
    component: () => import(/* webpackChunkName: "services-website-maintenance-and-support" */ '../views/services/WebMaintenanceSupportPage.vue')
  },
  {
    path: '/services/graphics-design',
    name: 'services-4',
    component: () => import(/* webpackChunkName: "services-graphics-design" */ '../views/services/GraphicsDesignPage.vue')
  },
  {
    path: '/services/video-creation',
    name: 'services-5',
    component: () => import(/* webpackChunkName: "services-website-design-and-development" */ '../views/services/VideoCreationPage.vue')
  },
  {
    path: '/services/quickbooks-accounting-implementation-and-support',
    name: 'services-6',
    component: () => import(/* webpackChunkName: "services-website-design-and-development" */ '../views/services/QuickbooksPage.vue')
  },
  {
    path: '/services/ecommerce',
    name: 'services-7',
    component: () => import(/* webpackChunkName: "services-website-design-and-development" */ '../views/services/EcommercePage.vue')
  },
  {
    path: '/services/social-media-marketing',
    name: 'services-8',
    component: () => import(/* webpackChunkName: "services-website-design-and-development" */ '../views/services/SocialMediaPage.vue')
  },
  {
    path: '/services/domain-registration-and-management',
    name: 'services-9',
    component: () => import(/* webpackChunkName: "services-domain-registration-and-management" */ '../views/services/DomainRegistrationPage.vue')
  },
  {
    path: '/services/web-hosting-and-cloud-hosting',
    name: 'services-10',
    component: () => import(/* webpackChunkName: "services-web-hosting-and-cloud-hosting" */ '../views/services/WebHostingPage.vue')
  },
  {
    path: '/services/business-email-solutions',
    name: 'services-11',
    component: () => import(/* webpackChunkName: "services-business-email-solutions" */ '../views/services/BusinessEmailPage.vue')
  },

];

export default services_routes
