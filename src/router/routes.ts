import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ChooseNiches.vue') }]
  },
  {
    path: '/choose-niches',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/ChooseNiches.vue') }]
  },
  {
    path: '/choose-contents',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/ChooseContents.vue') }]
  },
  {
    path: '/choose-rubrics',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/ChooseRubrics.vue') }]
  },
  {
    path: '/generate-text',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/GenerateText.vue') }]
  },
  {
    path: '/choose-image',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ChooseImage.vue') }]
  },
  {
    path: '/process-finishing',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/ProcessFinishing.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
