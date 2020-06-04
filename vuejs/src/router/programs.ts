const programsRoutes = [

  {
    path: '/programs-and-services',
    name: 'ProgramsPage',
    component: () => import(/* webpackChunkName: "programs-and-services'," */ '../views/ProgramsPage.vue'),
  },

  {
    path: '/daily-feeding',
    name: 'DailyFeedingPage',
    component: () => import(/* webpackChunkName: "daily-feeding'," */ '../views/DailyFeedingPage.vue'),
  },
  {
    path: '/educational-assistance',
    name: 'EducationalAssistancePage',
    component: () => import(/* webpackChunkName: "educational-assistance'," */ '../views/EducationalAssistancePage.vue'),
  },
  {
    path: '/medical-dental',
    name: 'MedicalDentalPage',
    component: () => import(/* webpackChunkName: "medical-dental'," */ '../views/MedicalDentalPage.vue'),
  },
  {
    path: '/spiritual-formation',
    name: 'SpiritualFormationPage',
    component: () => import(/* webpackChunkName: "spiritual-formation'," */ '../views/SpiritualFormationPage.vue'),
  },
  {
    path: '/parents-collaboration',
    name: 'ParentsCollaborationPage',
    component: () => import(/* webpackChunkName: "parents-collaboration'," */ '../views/ParentsCollaborationPage.vue'),
  },
  {
    path: '/livelihood-program',
    name: 'LivelihoodProgramPage',
    component: () => import(/* webpackChunkName: "livelihood-program'," */ '../views/LivelihoodProgramPage.vue'),
  },
];

export default programsRoutes
