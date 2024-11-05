const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about-us', component: () => import('pages/AboutPage.vue') },
      { path: '/practise-areas', component: () => import('pages/PractiseAreasPage.vue') },
      { path: '/team', component: () => import('pages/TeamPage.vue') },
      { path: '/contact-us', component: () => import('pages/ContactPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
