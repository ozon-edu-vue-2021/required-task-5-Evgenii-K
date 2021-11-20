<template>
  <div :class="$style.card__content">   
    <img 
      :class="$style.card__image" 
      :src="require(`@/assets/images/${product.img}`)" 
      alt="img-item" 
    />
    <div :class="$style.card__info__wrapper">
      <div :class="$style.card__info">
        <h3>{{ product.dish }}</h3>
        <span>{{ product.description }}</span>
        <h2>{{ product.price }} &#8381;</h2>
      </div>
    </div>
    <div :class="$style.card__info__button">    
      <base-button @click="toggleFavorites">
        Удалить из избранного
      </base-button>
    </div>

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
  width: 200px;
  height: 200px;
  align-self: center;
  margin-bottom: 5px;
}
.card__info__wrapper {
  height: 100%;
  padding: 20px;
}
.card__info {
  height: 100%;
  display: grid;
  align-content: space-between;
}
.card__info__button {
  height: 100%;
  display: grid;
  align-content: center;
}
</style>