<template>
  <div>
    <h1>Каталог товаров</h1>
    <div :class="$style.products__wrapper">
      <div
        v-for="product in getProduct"
        :key="product.id"
      >
        <product-card
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/Cards/ProductCard'
import { mapGetters } from "vuex";

export default {
  name: 'ProductsPage',
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(['getProduct'])
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