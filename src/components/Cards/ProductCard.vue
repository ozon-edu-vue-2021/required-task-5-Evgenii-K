<template>
  <div :class="$style.card__item">
    <div :class="$style.card__imgContainer">
      <div 
        :class="[$style.card__favorites, isFavorite]"
        @click="toggleFavorites"
      ></div>
      <img 
        :class="$style.card__image" 
        :src="require(`@/assets/images/${product.img}`)" 
        alt="img-item" 
      />
    </div>
    <h3 :class="$style.card__title">{{ product.dish }}</h3>
    <p :class="$style.card__span">Price: {{ product.price }} &#8381;</p>
    <div :class="$style.card__item__add">
      <base-multi-select
        readonly
        :selected="count"
        @update="updateCount"
      />
      <base-button
        @click="addToCart"
      >
        В корзину
      </base-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import BaseButton from '../BaseComponents/BaseButton.vue'
import BaseMultiSelect from '../BaseComponents/BaseMultiSelect.vue'

export default {
  name: 'ProductCard',
  components: {
    BaseButton,
    BaseMultiSelect,
  },
  data() {
    return {
      count: 1
    }
  },
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapMutations(['setFavorites', 'setToCart']),
    toggleFavorites() {
      this.setFavorites(this.product.id)
    },
    addToCart() {
      const { id, dish, price, img } = this.product
      const count = this.count
      this.setToCart({id, dish, price, img, count})
    },
    updateCount(value) {
      this.count = value
    },
  },
  computed: {
    ...mapGetters(['getFavorites']),
    isFavorite() {
      return this.getFavorites.includes(this.product.id)
              ? this.$style.card__active
              : ''
    }
  }
};
</script>

<style module>
.card__item {
  width: 220px;
  padding: 10px;
  margin-bottom: 30px;
  border: 2px solid darkgray;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  min-height: 340px;
  background-color: #fff;
}
.card__image {
  width: 200px;
  height: 200px;
  align-self: center;
  margin-bottom: 5px;
}
.card__title {
  padding-bottom: 5px;
}
.card__span {
  padding-bottom: 10px;
}
.card__imgContainer {
  position: relative;
}
.card__favorites {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 4px;
  top: 4px;
  background-image: url(../../assets/images/heart.png);
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
}
.card__favorites.card__active{
  background-image: url(../../assets/images/heart-filled.png);
}
.card__item__add {
  display: flex;
  flex-direction: column;
  align-items: flex-end
}
</style>