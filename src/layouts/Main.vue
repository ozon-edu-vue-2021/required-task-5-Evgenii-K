<template>
<div>
  <nav :class="$style.nav">
    <router-link to="/">Каталог товаров</router-link>
    <router-link to="/cart">Корзина</router-link>
    <router-link to="/favorites">Избранное</router-link>
  </nav>
  <router-view />
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Main',
  methods: {
    ...mapActions(['requestProductsData'])
  },
  created() {
    this.requestProductsData()
  }
}
</script>

<style module>
.nav {
  margin-bottom: 20px;
}
.nav a {
  margin: 20px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  color: black;
}
.router-link-exact-active {
  color: red;
}
</style>