import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('../layouts/Main.vue'),
      children: [
        {
          path: '',
          component: () => import('../pages/Products.vue'),
          meta: {
            title: 'Каталог товаров',
          },
        },
        {
          path: 'cart',
          component: () => import('../pages/Cart.vue'),
          meta: {
            title: 'Корзина',
          },
        },        
        {
          path: 'favorites',
          component: () => import('../pages/Favorites.vue'),
          meta: {
            title: 'Избранное',
          },
        },
      ],
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  const { title } = to.meta;
  document.title = title ? title : "";
  next();
});

export default router
