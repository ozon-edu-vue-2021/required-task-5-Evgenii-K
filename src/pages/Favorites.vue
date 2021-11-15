<template>
  <div>
    <h1>Избранное</h1>
    <div :class="$style.favorites__wrapper">
      <div
        v-for="product in getFavoritesItems"
        :key="product.id"
      >
        <favorite-card
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FavoriteCard from '../components/Cards/FavoriteCard'
import { mapGetters } from "vuex";

export default {
  name: 'Favorites',
  components: {
    FavoriteCard,
  },
  computed: {
    ...mapGetters(['getFavoritesItems'])
  },
}
</script>


<style module>
.favorites__wrapper {
  display: grid;
  grid-gap: 20px;
}
</style>