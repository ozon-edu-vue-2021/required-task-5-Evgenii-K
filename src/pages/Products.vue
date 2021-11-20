<template>
  <div>
    <h1>Каталог товаров</h1>
    <div :class="$style.products__wrapper">
    <product-card
      :product="product"
      v-for="product in products"
      :key="product.id"
    />
      </div>
  </div>
</template>

<script>
import ProductCard from '../components/Cards/ProductCard'
import { mapState } from "vuex";

export default {
  name: 'ProductsPage',
  components: {
    ProductCard,
  },
  computed: {
    ...mapState(['products'])
  },
}
</script>

<style module>
.products__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>