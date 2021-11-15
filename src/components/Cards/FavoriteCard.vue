<template>
  <div :class="$style.card__content">   
    <img 
      :class="$style.card__image" 
      :src="require(`@/assets/images/${product.img}`)" 
      alt="img-item" 
    />
    <div
      :class="$style.card__info"
    >
      {{ product.dish }}
      {{ product.price }}
    </div>
    <base-button
      @click="toggleFavorites"
    >
      Удалить из избранного
    </base-button>
  </div>
</template>

<script>
import { mapMutations  } from 'vuex'
import BaseButton from '../BaseComponents/BaseButton.vue'

export default {
  name: 'FavoriteCard',
  components: {
    BaseButton,
  },
  data() {
    return {
    }
  },
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapMutations([
      'setFavorites'
    ]),
    toggleFavorites() {
      this.setFavorites(this.product.id)
    },
  },
}
</script>

<style module>
.card__content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 8fr 2fr;
  grid-gap: 20px;
  background-color: #fff;
  padding: 10px;
}
.card__image {
  width: 100px;
  height: 100px;
  align-self: center;
  margin-bottom: 5px;
}
.card__info {}
</style>