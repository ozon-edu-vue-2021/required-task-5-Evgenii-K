<template>
  <div :class="$style.content">
    <button 
      :class="$style.button"
      @click="toggleFavorites"
    >
      {{ !isFavorite ? 'В избранное' : 'Удалить из избранного'}}
    </button>
    <div>|</div>
    <button 
      :class="$style.button"
      @click="remove"
    >
      Удалить из корзины
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'changeItem',
  props: {
    id: {
      type: Number,
    }
  },
  methods: {
    ...mapMutations([
      'removeFromCart',
      'setFavorites',
    ]),
    remove() {
      this.removeFromCart(this.id)
    },
    toggleFavorites() {
      this.setFavorites(this.id)
    },
  },
  computed: {
    ...mapGetters(['getFavorites']),
    isFavorite() {
      return this.getFavorites.includes(this.id)
    },
  }
}
</script>

<style module>
.content {
  display: inline-flex;
}
.button {
  border: none;
  background-color: #fff;
  font-size: 16px;
  color: #e53659;
}
.button:hover {
  color: #b42a45;
}
</style>