const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/register', component: () => import('pages/RegisterPage.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/sendVerify', component: () => import('pages/SendVerify.vue') },
      { path: '/confirmLogin', component: () => import('pages/ConfirmPassword.vue') },
      { path: '/profile', component: () => import('pages/ProfilePage.vue') },
      { path: '/category', component: () => import('pages/CategoryPage.vue') },
      { path: '/create-category', component: () => import('pages/CreateCategory.vue') },
      { path: '/edit-category', component: () => import('pages/EditCategory.vue') },
      { path: '/post', component: () => import('pages/PostPage.vue') },
      { path: '/create-post', component: () => import('pages/CreatePost.vue') },
      { path: '/edit-post', component: () => import('pages/EditPost.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
